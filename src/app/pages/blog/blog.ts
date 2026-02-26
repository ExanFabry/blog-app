import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { blogPosts } from '../../blog-posts-array';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit {
  public posts: string[][][] = [[]];

  http = inject(HttpClient);
  constructor() { }

  ngOnInit() {
    this.posts = blogPosts;
  }
}
