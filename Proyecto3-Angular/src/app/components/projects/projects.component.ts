import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
    public projects: ProjectModel[];
    public project: ProjectModel;
    public url: string;
    public status: boolean;
    
    constructor(
        private _projectService: ProjectService

    ) { 
        this.projects = [];
        this.url = Global.url;
        this.project = new ProjectModel('','','','','',2019,'');
        this.status = true;
    }

  ngOnInit(): void {
      this.getProjects();
  }

  getProjects() {
      this._projectService.getProjects().subscribe(
          response => {
              if (response.projects)
                  this.projects = response.projects;
              console.log(this.projects);
          },
          error => console.log(<any>error)
      )
  }
  getProject(ip: string) {
      this._projectService.getProject(this.project._id).subscribe(
          response => {
              if (response.project)
                  this.project = response.project;
              console.log(this.project);
          },
          error => console.log(<any>error)
      )
  }
}
