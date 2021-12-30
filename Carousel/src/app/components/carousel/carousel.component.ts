import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.src = this.images[0].src;
    this.author = this.images[0].author;
  }

  src : string = '';
  author : string = '';

  images = [
    {'src' : '../../../assets/images/background-1.jpg', 'author' : 'Sherman Yang'},
    {'src' : '../../../assets/images/background-2.jpg', 'author' : 'Jakob Owens'},
    {'src' : '../../../assets/images/background-3.jpg', 'author' : 'Dan Grinwis'},
    {'src' : '../../../assets/images/background-4.jpg', 'author' : 'Vincentiu Solomon'},
    {'src' : '../../../assets/images/background-5.jpg', 'author' : 'Silas Baisch'},
    {'src' : '../../../assets/images/background-6.jpg', 'author' : 'Dave Hoefler'},
    {'src' : '../../../assets/images/background-7.jpg', 'author' : 'Eugene Golovesov'},
    {'src' : '../../../assets/images/background-8.jpg', 'author' : 'Jennifer reynolds'},
    {'src' : '../../../assets/images/background-9.jpg', 'author' : 'Kellen Riggin'},
    {'src' : '../../../assets/images/background-10.jpg', 'author' : 'Rafael Hoyos'},
    {'src' : '../../../assets/images/background-11.jpg', 'author' : 'Sonya Romanovska'},
  ]
  
  
  imageSelected : number = 0;
  
  nextImage() : void {
    let previousImage = document.querySelector('.selected');
    previousImage!.classList.remove('selected');

    if (this.imageSelected === 10) {
      this.imageSelected = 0;
    }else {
      this.imageSelected++;
    }
    this.src = this.images[this.imageSelected].src;
    this.author = this.images[this.imageSelected].author;
    
    let nextImage = document.querySelector('.carousel__slider__image__' + (this.imageSelected + 1));
    nextImage!.classList.add('selected');
  }

  previousImage() : void {
    let previousImage = document.querySelector('.selected');
    previousImage!.classList.remove('selected');

    if (this.imageSelected === 0) {
      this.imageSelected = 10;
    }else {
      this.imageSelected--;
    }

    this.src = this.images[this.imageSelected].src;
    this.author = this.images[this.imageSelected].author;

    let nextImage = document.querySelector('.carousel__slider__image__' + (this.imageSelected + 1));
    nextImage!.classList.add('selected');
  }

  selectImage(numberImage : number) {
    this.imageSelected = --numberImage;

    let previousImage = document.querySelector('.selected');
    previousImage!.classList.remove('selected');

    this.src = this.images[this.imageSelected].src;
    this.author = this.images[this.imageSelected].author;

    let nextImage = document.querySelector('.carousel__slider__image__' + (this.imageSelected + 1));
    nextImage!.classList.add('selected');
  }
}
