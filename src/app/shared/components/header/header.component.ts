import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarEvent: EventEmitter<any> = new EventEmitter();

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideBarEvent.emit();
  }

  logout(){
    localStorage.removeItem('ACCESS_TOKEN');
    this.route.navigate(['/']);
    console.log('User Logged Out');
  }
}
