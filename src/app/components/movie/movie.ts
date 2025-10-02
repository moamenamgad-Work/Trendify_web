import { Component, inject, OnInit } from '@angular/core';
import { SMovies } from '../../services/smovies';
import { IMovies } from '../../interfaces/imovie';
import { Recommendation } from "../recommendation/recommendation";

@Component({
  selector: 'app-movie',
  imports: [Recommendation],
  templateUrl: './movie.html',
  styleUrl: './movie.css'
})
export class Movie implements OnInit {
  moviesList:IMovies[]=[]

private readonly movie = inject(SMovies)

ngOnInit():void{
  this.movie.getMovises().subscribe({
      next:(res)=>{
        this.moviesList= res.results
        
      },
      error:(err)=>{
        console.log(err);

      }
    })
}
}
