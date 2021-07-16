import { Movie } from './../../model/Movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from './../../service/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})
export class MovieDeleteComponent implements OnInit {

  idMovie: number
  movie: Movie = new Movie()
  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idMovie = this.route.snapshot.params['id']
    this.findByIdMovie(this.idMovie)
  }

  findByIdMovie(id: number){
    this.moviesService.getByIdMovie(id).subscribe((resp: Movie)=>{
      this.movie = resp
    })
  }

  apagar(){
    this.moviesService.deleteMovie(this.idMovie).subscribe(() => {
     alert('Filme apagado com sucesso!')
      this.router.navigate(['/movies'])
    })
  }
}
