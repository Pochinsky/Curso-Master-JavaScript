import { Component, OnInit, Input } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
    constructor() {  }

    ngOnInit(): void {
       $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 800 
      });
    }
  }

