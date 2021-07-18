import { Movie } from './../model/Movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllMovies(page: number){
    return this.http.get<any>(`${environment.server}/movies/?page=${page}`)
  }

  getByIdMovie(id: number): Observable <Movie>{
    return this.http.get<Movie>(`${environment.server}/movies/${id}`)
  }

  getByTitleMovie(page:number, title: String){
    return this.http.get<any>(`${environment.server}/movies/titulo/${title}?page=${page}`)
  }

  getByGenreMovie(page:number, genre: String){
    return this.http.get<any>(`${environment.server}/movies/genero/${genre}?page=${page}`)
  }

  postMovie(movie: Movie): Observable<Movie>{
    return this.http.post<Movie>(`${environment.server}/movies`,movie)
  }

  putMovie(movie: Movie): Observable<Movie>{
    return this.http.put<Movie>(`${environment.server}/movies`, movie)
  }

  deleteMovie(id: number){
    return this.http.delete(`${environment.server}/movies/${id}`)
  }
}
