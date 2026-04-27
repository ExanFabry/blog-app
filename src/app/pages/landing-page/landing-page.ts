import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { blogPosts } from '../../blog-posts-array';
import { Navbar } from "../layout/navbar/navbar";
import { Footer } from '../layout/footer/footer';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink, Navbar, Footer],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  public posts: string[][][] = [[]];

  http = inject(HttpClient);
  constructor() { }

  ngOnInit() {
    this.posts = blogPosts;
  }

  formatText(text: string) {
    return text.replace(/\n/g, '<br>'); // vervang alle \n door <br>
  }
}
