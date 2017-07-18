import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

// try

  posts: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.posts = db.list('/posts');
  }

//

  ngOnInit() {
  }

}
