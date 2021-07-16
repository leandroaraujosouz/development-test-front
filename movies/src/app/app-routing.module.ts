import { CadastrarMovieComponent } from './cadastrar-movie/cadastrar-movie.component';
import { MovieEditComponent } from './edit/movie-edit/movie-edit.component';
import { MovieDeleteComponent } from './delete/movie-delete/movie-delete.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie-delete/:id', component: MovieDeleteComponent},
  {path: 'movie-edit/:id', component: MovieEditComponent},
  {path: 'cadastrar-movie', component: CadastrarMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
