import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import axios from 'axios';
const axiosClient = axios.create();

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  async searchAllInOne(searchText: string): Promise<any> {
    return axiosClient({
      method: 'get',
      url: environment.apiUrl + `/search/` + searchText,
    });
  }

}
