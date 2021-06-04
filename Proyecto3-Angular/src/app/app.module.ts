import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routes';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateProjectsComponent } from './components/create-projects/create-projects.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import * as $ from "jquery";
import { SliderComponent } from './components/slider/slider.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ProjectsComponent,
    ContactComponent,
    CreateProjectsComponent,
    DetailComponent,
    ErrorComponent,
    EditComponent,
    SliderComponent,
    HighlightedDirective,
  ],
  imports: [
    BrowserModule,
    routing,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
