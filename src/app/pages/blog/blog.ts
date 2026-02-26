import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  http = inject(HttpClient);
  constructor() { }
}
