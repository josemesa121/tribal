import { Component, OnInit } from '@angular/core';
import { SearchService } from './services/search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchText = '';
  loading = false;
  data: any;
  tabStatus = '';

  constructor(
    private searchService: SearchService
  ){}

  ngOnInit(): void {}

  search(): void{
    this.loading = true;
    this.searchService.searchAllInOne(this.searchText).then(res => {
      // Order data by name
      res.data.crcind.people = res.data.crcind.people.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
      res.data.itunes.movies = res.data.itunes.movies.sort((a, b) => (a.trackName > b.trackName) ? 1 : -1);
      res.data.itunes.musics = res.data.itunes.musics.sort((a, b) => (a.trackName > b.trackName) ? 1 : -1);
      res.data.tvmaze.shows = res.data.tvmaze.shows.sort((a, b) => (a.show.name > b.show.name) ? 1 : -1);
      this.data = res.data;
      if (this.data.crcind.people.length === 0
        && this.data.itunes.movies.length === 0
        && this.data.itunes.musics.length === 0
        && this.data.tvmaze.shows.length === 0
      ){
        this.tabStatus = 'people';
      }
      this.loading = false;
    }).catch(error => {
      console.log(error);
      this.loading = false;
    });
  }
}
