import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  //se crea un arreglo que va a contener los heroes
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    //se envía un parametro de ID para buscar a ese héroe
    this.activatedRoute.params.subscribe( params =>{
      this.heroe = this.heroesService.getHeroe( params['id']);
    })
  }

  ngOnInit() {
  }

}
