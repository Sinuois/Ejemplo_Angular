import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  //se crea un arreglo que va a contener los heroes
  heroe: any = {};

  constructor() { }

  ngOnInit() {
  }

}
