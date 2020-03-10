import { Component, OnInit } from '@angular/core';
import {NewsFeed} from 'src/app/models/news-model';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  constructor() { }
  newsf = new NewsFeed('12-03-1998', '13:00', 'this is news feed page');
  ngOnInit(): void {
  }

}
