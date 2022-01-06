import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contents = [
    {'position' : 0, 'content' : 'My Story', 'link' : 'Story' },
    {'position' : 1, 'content' : 'Priming', 'link' : 'Priming' },
    {'position' : 2, 'content' : 'Enter Framer', 'link' : 'Framer' },
    {'position' : 3, 'content' : 'For the no-coders. Framer is for you.', 'link' : 'No-coders' },
    {'position' : 4, 'content' : 'For the code-savvy. Framer is for you.', 'link' : 'Code-savvy' },
    {'position' : 5, 'content' : 'My Sweet Spot: How Our Team is Using Framer', 'link' : 'Spot' },
    {'position' : 6, 'content' : 'Figma', 'link' : 'Figma' },
    {'position' : 7, 'content' : 'My Framer Desktop', 'link' : 'Desktop' },
    {'position' : 8, 'content' : 'Tight Developer Schedule', 'link' : 'Schedule'},
  ];
  
  selectLink(event : any) {
    let allLinks = document.querySelectorAll('.blog__nav__content');
    allLinks.forEach( (link) => {
      if (link.classList.contains('selected')) {
        link.classList.remove('selected');
      }
    });

    if (event.srcElement.localName === 'a') {
      event.path[1].classList.add('selected');
    }
    event.srcElement.classList.add('selected');
  }
}
