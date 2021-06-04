import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
    public url: string;
    public project: ProjectModel;
    public confirm: boolean;
    public available: boolean;

    constructor(
        private _projectService: ProjectService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
        this.url = Global.url;
        this.project = new ProjectModel('','','','','',2021,'');
        this.confirm = false;
        this.available = true;
    }

  ngOnInit(): void {
      this._route.params.subscribe(params => {
          const id = params.id;
          this.getProject(id);
      });
  }
  getProject(id: string) {
      this._projectService
          .getProject(id)
          .subscribe(response => {
            this.project = response.project;
      }, error => console.log(<any>error));
  }
  removeProject(id: string) {
      this._projectService
          .removeProject(id)
          .subscribe(response => {
              if (response.project)
                this._router.navigate(['/proyectos']);
          }, 
          error => console.log(<any>error));
  }
  setConfirm(conf: boolean) {
      this.confirm = conf;
  }
  nonAvailable(av: boolean) {
      this.available = av;
  }
}
