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
  isOpen;


  ngOnInit() {
    this.isOpen = false;

    // ex of service methods ...
    // this.api_server.getSubscribers().subscribe(
    //   data => {
    //     this.subs = data;
    //     console.log(data);
    //   }
    // );
  }


  openNav() {
    let menu = document.querySelector('.itemsList ul');
    if (this.isOpen) {
      (<any>menu).style = "display:none"
      this.isOpen = false
    }
    else {
      (<any>menu).style = "display:flex"
      this.isOpen = true

    }
  }

}
