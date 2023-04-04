import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }
  
  baseurl = "https://api.themoviedb.org/3";
  apikey = "9fb93cd05da464f7544f6b299bfb5cc6";

  bannerApiData(): Observable<any> { 
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }

  trendingMovieApiData(): Observable<any> { 
   return this. http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`)

  }

  fetchActionMovies(): Observable<any> { 
    return this. http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`)

  }

  fetchAdventureMovies(): Observable<any> { 
    return this. http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`)

  }

  fetchAnimationMovies(): Observable<any> { 
    return this. http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`)

  }

  fetchComedyMovies(): Observable<any> { 
    return this. http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`)

  }

  fetchDocumentaryMovies(): Observable<any> { 
    return this. http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`)

  }

  fetchScienceFictionMovies(): Observable<any> { 
    return this. http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`)

  }

   fetchThrillerMovies(): Observable<any> { 
    return this. http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`)

  }

}
