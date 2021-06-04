import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectModel } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.sass'],
  providers: [ProjectService, UploadService]
})
export class CreateProjectsComponent implements OnInit {
    public url: string;
    public title: string;
    public project: ProjectModel;
    public status: number;
    public filesToUpload: Array<File>;
    public saveProject: ProjectModel;
    public button: string;
    public action: string;

    constructor(
        private _projectService: ProjectService,
        private _uploadService: UploadService
    ) { 
        this.url = Global.url;
        this.title = 'Crear Proyecto';
        this.project = new ProjectModel('','','','','',2019,'');
        this.status = 0;
        this.filesToUpload = new Array();
        this.saveProject = new ProjectModel('','','','','',2019,'');
        this.button = 'Crear';
        this.action = 'creado';
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        this._projectService.saveProject(this.project).subscribe(response => {
            if (response.project) {
                this._uploadService
                    .makeFileRequest(
                        Global.url+'upload-image/'+response.project._id,[], 
                        this.filesToUpload, 
                        'image'
                    )
                    .then((result: any) => {
                        this.saveProject = result.project;
                        this.status = 1;
                        form.reset();
                    }
                    );
            }
            else 
                this.status = -1;
        },
        error=>{ console.log(error) });
    }
    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }
}
