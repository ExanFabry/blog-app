import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'Home',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})

export class BlogPage {
  http = inject(HttpClient);
  constructor() {}
}