import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service: MovieApiServiceService) { }

  bannerResult: any = []
  trendingResult: any = []
  actionResult: any = []
  adventureResult: any = []
  animationResult: any = []
  comedyResult: any = []
  documentaryResult: any = []
  scienceResult: any = []
  thrillerResult:any = []

  ngOnInit(): void{
    this.bannerdata()
    this.trendingData()
    this.actionData()
    this.adventureData()
    this.animationData()
    this.comedyData()
    this.documentaryData()
    this.scienceData()
    this.thrillerData()
   
  }
  
  bannerdata() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, "bannerresult#");
      this.bannerResult = result.results
      
    })
  }

  trendingData() { 
     this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, "trendingresult#");
      this.trendingResult = result.results
      
    })
  }

  actionData() { 
     this.service.fetchActionMovies().subscribe((result) => {
      console.log(result, "trendingresult#");
      this.actionResult = result.results
      
    })
  }
   adventureData() { 
     this.service.fetchAdventureMovies().subscribe((result) => {
      console.log(result, "trendingresult#");
      this.adventureResult = result.results
      
    })
   }
   animationData() { 
     this.service.fetchAnimationMovies().subscribe((result) => {
      console.log(result, "trendingresult#");
      this.animationResult = result.results
      
    })
   }
   comedyData() { 
     this.service.fetchComedyMovies().subscribe((result) => {
      console.log(result, "trendingresult#");
      this.comedyResult = result.results
      
    })
   }
   scienceData() { 
     this.service.fetchScienceFictionMovies().subscribe((result) => {
      console.log(result, "trendingresult#");
      this.scienceResult = result.results
      
    })
   }
   documentaryData() { 
     this.service.fetchDocumentaryMovies().subscribe((result) => {
      console.log(result, "trendingresult#");
      this.documentaryResult = result.results
      
    })
   }
   thrillerData() { 
     this.service.fetchThrillerMovies().subscribe((result) => {
      console.log(result, "trendingresult#");
      this.thrillerResult = result.results
      
    })
  }
}
