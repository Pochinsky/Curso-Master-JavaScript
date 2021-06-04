import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectModel } from 'src/app/models/project.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: '../create-projects/create-projects.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {
    public url: string;
    public title: string;
    public project: ProjectModel;
    public status: number;
    public filesToUpload: Array<File>;
    public saveProject: ProjectModel;
    public button: string;
    public action: string;

    constructor(
        private _route: ActivatedRoute,
        private _projectService: ProjectService,
        private _uploadService: UploadService
    ) { 
        this.url = Global.url;
        this.title = 'Editar Proyecto';
        this.project = new ProjectModel('','','','','',2019,'');
        this.status = 0;
        this.filesToUpload = new Array();
        this.saveProject = new ProjectModel('','','','','',2019,'');
        this.button = 'Editar';
        this.action = 'editado';
    }

    ngOnInit(): void {
        this._route.params.subscribe( params=> {
            const id = params.id;
            this.getProject(id);
        });
    }

    onSubmit(form: NgForm) {  }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }

    getProject(id: string) {
        this._projectService.getProject(id).subscribe(
            response => {
                if (response.project)
                    this.project = response.project;
            },
            error => console.log(<any>error))
    }
}
