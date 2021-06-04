import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ProjectModel } from '../models/project.model';
import { Global } from './global';

@Injectable()
export class ProjectService {
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService() {
        return 'Probando servicio de angular';
    }

    saveProject(project: ProjectModel): Observable<any> {
        const params = JSON.stringify(project);
        const headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'/save-project', params, {headers: headers});
    }
    getProjects(): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'get-all-projects', { headers: headers });
    }
    getProject(id: string): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'get-project/'+id, { headers: headers });
    }
    removeProject(id: string):Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'remove-project/'+id, {headers: headers});
    }
    updateProject(project: ProjectModel): Observable<any> {
        const params = JSON.stringify(project);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'update-project/', params,  {headers: headers});
    }
}
