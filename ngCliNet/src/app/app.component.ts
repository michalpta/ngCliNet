import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: Http) { }

  ngOnInit() {
      this.http.get('../api/default').subscribe((x) => this.webApiResult = x.text());
  }

  title = 'ngCliNet App works very well!';
  webApiResult = '';
}
