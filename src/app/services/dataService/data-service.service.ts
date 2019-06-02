import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc';

  getData() {
    return this.http.get(this.configUrl);
  }

}
