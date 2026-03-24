import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Navbar } from "../layout/navbar/navbar";

@Component({
  selector: 'app-about',
  imports: [Navbar],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  http = inject(HttpClient);
  constructor() { }
}
