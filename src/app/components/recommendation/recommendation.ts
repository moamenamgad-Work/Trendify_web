import { Component, inject } from '@angular/core';
import { IMovies } from '../../interfaces/imovie';
import { SMovies } from '../../services/smovies';

@Component({
  selector: 'app-recommendation',
  imports: [],
  templateUrl: './recommendation.html',
  styleUrl: './recommendation.css'
})
export class Recommendation {
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
