import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../service/movies.service';
import { Movie } from './../../model/Movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-edit',
  templateUrl:'./movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

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

  editar() {
    if((this.movie.title == null || this.movie.title == "") ||
      (this.movie.genres == null || this.movie.genres == "")){
      alert('todos campos devem ser preenchidos!')
    } else {
      this.moviesService.putMovie(this.movie).subscribe((resp: Movie) => {
      this.movie = resp
      alert('Filme atualizado com sucesso! ')
      this.router.navigate(['/movies'])
    })}
  }
}
