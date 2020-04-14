import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { RespuestaTopHeadlines, Article} from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  news: Article[] = [];

  constructor( private newsService: NewsService ) {}

  ngOnInit() {
    this.newsService.getTopHeadlies()
    .subscribe( resp => {
      console.log('Noticias', resp);
      // this.news = resp.articles;
      this.news.push( ...resp.articles );
    });
  }

}
