import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { 
    this.httpClient.get(this.url).subscribe(response: any[] => {
      this.posts = response;
    });

    // createPost(input: HTMLInputElement) {
    //   let post = {input: input.value};
    //   input.value = "";
      
    //   // this.httpClient.post(this.url, post)
    //   //   .subscribe(response => {
    //   //     post['id'] = response.id;
    //   //     this.posts.splice(0, 0, post);
    //   //   });
    // }

    
  }



  ngOnInit() {
  }

}