import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.sass']
})
export class AboutmeComponent implements OnInit {
    public title: string;
    public subtitle: string;
    public web: string;

    constructor() {
        this.title = "Tomas Guttman";
        this.subtitle = "Desarrollador Full Stack";
        this.web = "https://www.linkedin.com/in/guttmanpogorzelski/";
    }

  ngOnInit(): void {
  }

}
