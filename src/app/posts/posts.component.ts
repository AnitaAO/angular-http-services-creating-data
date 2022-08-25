import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { 
    http.get(this.url).subscribe(response =>{
      this.posts = response.json()
      }
    ),

    createPost(input: HTMLInputElement) {
      let post = {input: input.value};
      input.value = "";
      
      this.httpClient.post(this.url, JSON.stingify(post))
        .subscribe(response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
        });
    }

    
  }



  ngOnInit() {
  }

}