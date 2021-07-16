import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDeleteComponent } from './delete/movie-delete/movie-delete.component';
import { MovieEditComponent } from './edit/movie-edit/movie-edit.component';
import { CadastrarMovieComponent } from './cadastrar-movie/cadastrar-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDeleteComponent,
    MovieEditComponent,
    CadastrarMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
