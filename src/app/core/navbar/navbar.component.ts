import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isIn: boolean = false;  // store state

  constructor() { }

  ngOnInit() {
  }

  public toggleState() {  // click handler
    this.isIn = !this.isIn;
  }

}
