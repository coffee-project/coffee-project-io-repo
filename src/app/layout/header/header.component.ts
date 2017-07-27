import { Component, OnInit } from '@angular/core';
import {MdToolbarModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';

@Component({
  selector: 'coffeeprojectapp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./../layout.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
