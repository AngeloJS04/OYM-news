import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NewsService } from 'src/app/services/news.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  {

  categories = ['business', 'general', 'health', 'science', 'sports', 'entertainment', 'technology'];

  news: Article[] = [];
  segment: any;


  constructor(private newsService: NewsService) {}

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {

  // this.segment.value = this.categories[0];
  this.loadNews(this.categories[0]);

    }
  changeCategory( event ) {

    this.news = [];
    console.log( event.detail.value );
    this.loadNews(event.detail.value);

      }

  loadNews(category: string) {
    this.newsService.getTopHeadlinesCategories( category )
        .subscribe(resp => {
          console.log(resp);
          this.news.push( ...resp.articles );
    });
  }
}
