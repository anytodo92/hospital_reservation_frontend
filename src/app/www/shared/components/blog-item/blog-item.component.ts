import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  @Input("blog") blog : any;
  @Input("mine") mine : boolean;

  @Output("deleteHandler") deleteHandler : EventEmitter<number> = new EventEmitter<number>();
  @Output("editHandler") editHandler : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  editBlog(id : number) {
    this.editHandler.emit(id);
  }

  deleteBlog(id : number) {
    this.deleteHandler.emit(id);
  }

}
