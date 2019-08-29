import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'greenchip';
  subs;
  constructor(private api_server: ApiService) {
  }

  showNav() {
    const navbar: HTMLElement = document.querySelector('.container_1');
    navbar.style.display = 'block';
    console.log('test');
  }

  ngOnInit() {

    // ex of service methods ...
    // this.api_server.getSubscribers().subscribe(
    //   data => {
    //     this.subs = data;
    //     console.log(data);
    //   }
    // );
  }

}
