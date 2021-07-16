import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from './../service/movies.service';
import { Movie } from './../model/Movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-movie',
  templateUrl: './cadastrar-movie.component.html',
  styleUrls: ['./cadastrar-movie.component.css']
})
export class CadastrarMovieComponent implements OnInit {
  movie: Movie = new Movie()
  idMovie: number

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(){
    this.idMovie = this.route.snapshot.params['id']
    this.findByIdMovie(this.idMovie)
    this.movie.genres
  }

  findByIdMovie(id: number){
    this.moviesService.getByIdMovie(id).subscribe((resp: Movie)=>{
      this.movie = resp
    })
  }

  cadastrar() {
    if((this.movie.title == null || this.movie.title == "") ||
      (this.movie.genres == null || this.movie.genres == "")){
      alert('todos campos devem ser preenchidos!')
    } else {
      this.moviesService.postMovie(this.movie).subscribe((resp: Movie) => {
      this.movie = resp
      alert('Filme cadastrado com sucesso! ')
      this.router.navigate(['/movies'])
    })}
  }

}
