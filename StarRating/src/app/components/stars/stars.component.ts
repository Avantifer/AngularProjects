import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeStarYellow(event : any) {
    let postionStar = event.srcElement.classList[1].substr(event.srcElement.classList[1].length - 1);
    let allStars = document.querySelectorAll('.star');
    
    allStars.forEach( (star) => {
      let allStarPosition = star.classList[1].substring(star.classList[1].length - 1);
      if (allStarPosition <= postionStar) {
        star.setAttribute('src', '../../../assets/images/star.svg');
      }
    });
  }

  changeStarBlank(event : any) {
    let postionStar = event.srcElement.classList[1].substr(event.srcElement.classList[1].length - 1);
    let allStars = document.querySelectorAll('.star');
    
    allStars.forEach( (star) => {
      let allStarPosition = star.classList[1].substring(star.classList[1].length - 1);
      if (allStarPosition >= postionStar) {
        star.setAttribute('src', '../../../assets/images/star-blank.png');
      }
    });
  }
}
