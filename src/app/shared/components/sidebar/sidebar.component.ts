import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userAuthority : string;
  userName: string;
  emailId: string;
  
  constructor() { }

  ngOnInit() {
    this.userAuthority = localStorage.getItem('userAuthority');
    this.userName = localStorage.getItem('name');
    this.emailId = localStorage.getItem('emailId');
  }

}
