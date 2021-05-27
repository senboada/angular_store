import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper/bundle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  constructor() { }

  mySwiper!: Swiper;

  ngOnInit(): void 
  {
  }

  ngAfterViewInit()
  {
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

  

}
