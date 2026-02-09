import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'Post',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})

export class PostsPage implements OnInit {
  id!: string;

  http = inject(HttpClient);
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')!;
    });
  }
}