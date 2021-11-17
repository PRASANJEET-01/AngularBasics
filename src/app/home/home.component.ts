import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  movieDetailList:Array<MovieDetails>=[]
  movieName:string="";
  movieDirector:string="";
  movieActor:string="";
  constructor() { }

  ngOnInit(): void {
  }
  // propertyChange():void{
  //   console.log(this.interpolationProperty);
  //   console.log(this.movieName);
  //   console.log(this.movieDirector);
  // }

  save():void{
    this.movieDetailList.push({movieName:this.movieName,movieDirector:this.movieDirector,movieActor:this.movieActor})
    this.movieName="";
    this.movieDirector="";
    this.movieActor="";


  }
  cancel():void{
    this.movieName="";
    this.movieDirector="";
    this.movieActor="";
  }
  showAll():void{
    console.log(this.movieDetailList);
  }
}
  class MovieDetails{
    movieName:string="";
    movieDirector:string="";
    movieActor:string="";
  }

