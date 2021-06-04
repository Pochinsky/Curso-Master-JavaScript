import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateProjectsComponent } from './components/create-projects/create-projects.component';
import { DetailComponent } from './components/detail/detail.component';
import { ErrorComponent } from './components/error/error.component';
import { EditComponent } from './components/edit/edit.component';

const appRoutes: Routes = [
    {path: '', component: AboutmeComponent},
    {path: 'sobre-mi', component: AboutmeComponent},
    {path: 'proyectos', component: ProjectsComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'crear-proyecto', component: CreateProjectsComponent},
    {path: 'proyecto/:id', component: DetailComponent},
    {path: 'editar-proyecto/:id', component: EditComponent},
    {path: '**', component: ErrorComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
