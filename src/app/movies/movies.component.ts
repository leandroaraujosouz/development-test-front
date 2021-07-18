import { MoviesService } from './../service/movies.service';
import { Movie } from './../model/Movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: Movie = new Movie()
  listaMovie: Movie[]
  divTitulo: any
  divGenero: any
  txtTitulo: any
  txtGenero: any
  page: number = 0
  totalPage: number
  tipoConsulta: number //1: findAll, 2: findByTitulo, 3: findByGenero

  opcao: string = "Titulo"


  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.findAllMovies()
    this.divGenero = window.document.querySelector("#divGenero")
    this.divTitulo = window.document.querySelector("#divTitulo")
    this.txtGenero = window.document.querySelector("#genres")
    this.txtTitulo = window.document.querySelector("#title")
    this.divGenero.style.display = "none"

  }

  escolha() {
    if (this.opcao == "Titulo") {
      this.divGenero.style.display = "none"
      this.txtGenero.value = ""
      this.movie.genres = ""
      this.divTitulo.style.display = "block"
    } else {
      this.divGenero.style.display = "block"
      this.divTitulo.style.display = "none"
      this.txtTitulo.value = ""
      this.movie.title = ""

    }
  }

  consultar() {
    this.listaMovie = []
    if ((this.movie.title == "" || this.movie.title == null) && (this.movie.genres == "" || this.movie.genres == null)) {
      this.findAllMovies()
    }
    else {
      if (this.opcao == "Titulo") {
        this.findByTitleMovie()
      } else {
        this.findAllByGenres()
      }
      setTimeout(() => {
        if (this.listaMovie.length == 0) {
          alert('Resultado da consulta não encontrado!')
        }
      }, 500);
    }
  }
  findAllMovies() {
    this.moviesService.getAllMovies(this.page).subscribe((resp: any) => {
      this.totalPage = resp.totalPages
      console.log(this.totalPage)
      this.listaMovie = resp.content
      this.tipoConsulta = 1
    })
  }

  findByTitleMovie() {
    this.moviesService.getByTitleMovie(this.page, this.movie.title).subscribe((resp: any) => {
      this.totalPage = resp.totalPages
      this.listaMovie = resp.content
      this.tipoConsulta = 2
    })
  }

  findAllByGenres() {
    this.moviesService.getByGenreMovie(this.page, this.movie.genres).subscribe((resp: any) => {
      this.totalPage = resp.totalPages
      this.listaMovie = resp.content
      this.tipoConsulta = 3
    })
  }

  pgAnterior() {
    if (this.page > 0) {
      this.page -= 1
      if (this.tipoConsulta == 1)
        this.findAllMovies()
      else if (this.tipoConsulta == 2)
        this.findByTitleMovie()
      else if (this.tipoConsulta == 3)
        this.findAllByGenres()
    }

  }

  pgProxima() {
    if (this.page < this.totalPage) {
      this.page++
      if (this.tipoConsulta == 1)
        this.findAllMovies()
      else if (this.tipoConsulta == 2)
        this.findByTitleMovie()
      else if (this.tipoConsulta == 3)
        this.findAllByGenres()
    }
  }

  pgAtual() {
    if (this.page >= 0 && this.page <= this.totalPage) {
      if (this.tipoConsulta == 1)
        this.findAllMovies()
      else if (this.tipoConsulta == 2)
        this.findByTitleMovie()
      else if (this.tipoConsulta == 3)
        this.findAllByGenres()
    }else{
      alert("Pagina não encontrada!")
    }
  }

}
