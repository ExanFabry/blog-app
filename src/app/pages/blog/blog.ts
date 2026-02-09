import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'Home',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})

export class BlogPage {
  http = inject(HttpClient);
  constructor() {}
}