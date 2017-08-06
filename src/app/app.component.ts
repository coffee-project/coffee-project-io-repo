import { Component, OnInit } from '@angular/core';

// try

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'coffeeprojectapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    public options = {
  'font': 'karla',
  'defaultOpen': false,
  'radius': '500',
  'spinable': true,
  'showIcons': false,
  'offset': '10',
  'buttonBackgroundColor': '#fff',
  'buttonWidth': '90',
  'buttonFontColor': '#616161',
  'buttonOpacity': '0.5',
  'buttonCrossImgSize': '40%',
  'wingFontWeight': '700',
  'wingFontColor': '#616161'
};

    public wings = [
  {
    'title': 'info',
    'color': 'rgba(255,255,255,0.7)',
    'icon': {
      'name': 'fa fa-info'
    }
  },
  {
    'title': 'login',
    'color': 'rgba(255,255,255,0.7)',
    'icon': {
      'name': 'fa fa-sign-in'
    }
  },
  {
    'title': 'initiatives',
    'color': 'rgba(255,255,255,0.7)',
    'icon': {
      'name': 'fa fa-list'
    }
  },
  {
    'title': 'blog',
    'color': 'rgba(255,255,255,0.7)',
    'icon': {
      'name': 'fa fa-coffee'
    }
  }
];
    public gutter = {
  'top': 100,
  'left': 100,
  'bottom': 100,
  'right': 100
};
    
    public startAngles = {
  'topLeft': 5,
  'topRight': 95,
  'bottomRight': 185,
  'bottomLeft': 275
}
  title = 'app works!';







// try

  items: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }
    ngOnInit(): void {
    }
//

}
