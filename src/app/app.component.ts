import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webklient';



  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get('https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-06&sortBy=publishedAt&apiKey=44e62bc74cb2483e957fb63f59080fc3')
      .subscribe(
        (data) => {
          console.log(data);
        }, (error) => {

        }
      );



  }
}
