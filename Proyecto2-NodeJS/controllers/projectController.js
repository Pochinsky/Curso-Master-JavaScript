"use strict";

const response = require("express");
const ProjectModel = require("../models/projectModel");
const fs = require("fs");
const path = require("path");

const projectController = {
  home: (request, response) => response.status(200).send({ message: "home" }),
  test: (request, response) => response.status(200).send({ message: "test" }),
  saveProject: (request, response) => {
    const project = new ProjectModel();
    const params = request.body;
    project.name = params.name;
    project.description = params.description;
    project.category = params.category;
    project.languages = params.languages;
    project.year = params.year;
    project.image = null;
    project.save((error, projectStored) => {
      if (error)
        return res
          .status(500)
          .send({ message: "Error al guardar el proyecto" });
      if (!projectStored)
        return res
          .status(404)
          .send({ message: "No se ha podido guardar el proyecto" });
    });
    return response.status(200).send({ project: project });
  },
  getProject: (request, response) => {
    const projectID = request.params.id;
    ProjectModel.findById(projectID, (error, project) => {
      if (error)
        return response
          .status(500)
          .send({ message: "Error al devolver los datos." });
      if (!project)
        return response.status(404).send({ message: "El proyecto no existe." });
      return response.status(200).send({ project: project });
    });
  },
  getAllProjects: (request, response) => {
    ProjectModel.find().exec((error, projects) => {
      if (error)
        return response
          .status(500)
          .send({ message: "Error al devolver los datos." });
      if (!projects)
        return response.status(404).send({ message: "No hay proyectos." });
      return response.status(200).send({ projects: projects });
    });
  },
  updateProject: (request, response) => {
    const project = new ProjectModel();
    const params = request.params;
    project._id = params._id;
    project.name = params.name;
    project.description = params.description;
    project.category = params.category;
    project.languages = params.languages;
    project.year = params.year;
    project.image = params.image;
    ProjectModel.findByIdAndUpdate(
      project._id,
      {
        name: project.name,
        description: project.descriptions,
        category: project.category,
        languages: project.languages,
        year: project.year,
        image: project.image,
      },
      { new: true },
      (error, projectUpdated) => {
        if (error)
          return response
            .status(500)
            .send({ message: "Error al guardar el proyecto" });
        if (!projectUpdated)
          return response
            .status(404)
            .send({ message: "No se ha podido guardar el proyecto" });
        return response.status(200).send({ project: projectUpdated });
      }
    );
    return response.status(200).send({ project: project });
  },
  deleteProject: (request, response) => {
    const projectID = request.params.id;
    ProjectModel.deleteOne(
      { _id: projectID },
      { new: true },
      (error, projectRemoved) => {
        if (error)
          return response
            .status(500)
            .send({ message: "Error al enviar los datos." });
        if (!projectRemoved)
          return response
            .status(404)
            .send({ message: "No existe proyecto para eliminar." });
        return response.status(200).send({ project: projectRemoved });
      }
    );
  },
  uploadImage: (request, response) => {
    const projectID = request.params.id;
    let filename = "Imagen no subida.";
    if (request.files) {
      const path = request.files.image.path;
      filename = path.split("/")[1];
      const extension = filename.split(".")[1].toLowerCase();
      if (
        extension == "png" ||
        extension == "jpg" ||
        extension == "jpeg" ||
        extension == "gif"
      ) {
        ProjectModel.findByIdAndUpdate(
          projectID,
          { image: filename },
          { new: true },
          (error, projectUpdated) => {
            if (error)
              return response
                .status(500)
                .send({ message: "Error al subir la imagen." });
            if (!projectUpdated)
              return response
                .status(404)
                .send({ message: "No existe proyecto para actualizar." });
            return response.status(200).send({ project: projectUpdated });
          }
        );
      } else {
        fs.unlink(path, () =>
          response.status(200).send({ message: "Extension invalida" })
        );
      }
    } else return response.status(200).send({ message: filename });
  },
  getImageFile: (request, response) => {
    const file = request.params.file;
    const pathFile = "./images/" + file;
    fs.exists(pathFile, (exists) => {
      if (exists) return response.sendFile(path.resolve(pathFile));
      else
        return response.status(200).send({ messager: "No existe la imagen." });
    });
  },
};

module.exports = projectController;
