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

  getAllMovies(): Observable <Movie[]>{
    return this.http.get<Movie[]>(`${environment.server}/movies`)
  }

  getByIdMovie(id: number): Observable <Movie>{
    return this.http.get<Movie>(`${environment.server}/movies/${id}`)
  }

  getByTitleMovie(title: String): Observable <Movie[]>{
    return this.http.get<Movie[]>(`${environment.server}/movies/titulo/${title}`)
  }

  getByGenreMovie(genre: String): Observable <Movie[]>{
    return this.http.get<Movie[]>(`${environment.server}/movies/genero/${genre}`)
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
