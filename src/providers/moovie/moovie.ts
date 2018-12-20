import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatersMovies() {
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=427cb40b13d2d3e77cd5012174e4a5f0");
  }

}
