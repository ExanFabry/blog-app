import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { blogPosts } from '../../blog-posts-array';
import { Navbar } from "../layout/navbar/navbar";

@Component({
  selector: 'app-blog',
  imports: [RouterLink, Navbar],
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
