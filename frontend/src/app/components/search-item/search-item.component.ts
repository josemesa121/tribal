import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() service: string;

  serviceImgUrl: string;

  constructor() {
  }

  ngOnInit(): void {
    switch (this.service) {
      case 'crcind':
        this.serviceImgUrl = '../../../assets/services/crcind.png';
        break;
      case 'itunes':
        this.serviceImgUrl = '../../../assets/services/itunes.png';
        break;
        case 'tvmaze':
        this.serviceImgUrl = '../../../assets/services/tvmaze.jpg';
        break;
    }
  }

}
