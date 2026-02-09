import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'About',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})

export class AboutPage {
  http = inject(HttpClient);
  constructor() {}
}