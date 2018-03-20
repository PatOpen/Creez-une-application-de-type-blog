import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() postsTitle: string;
  @Input() postsContent: string;
  @Input() postsLoveIts: number;
  @Input() createAt: Date;

  constructor() { }

  ngOnInit() {
  }

  onAime(){
    let aime: number = this.postsLoveIts + 1 ;
    this.postsLoveIts = aime;
  }

  onAimePas(){
      let aime: number = this.postsLoveIts - 1 ;
      this.postsLoveIts = aime;
  }

  getColor(){
      if(this.postsLoveIts > 0){
          return 'green';
      }else if(this.postsLoveIts < 0){
          return 'red';
      }
  }

}
