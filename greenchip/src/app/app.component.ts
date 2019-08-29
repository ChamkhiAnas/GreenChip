import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'greenchip';
  constructor() {
  }

  showNav() {
    const navbar: HTMLElement = document.querySelector('.container_1');
    navbar.style.display = 'block';
    console.log('test');
  }

  ngOnInit() {

  }

}
