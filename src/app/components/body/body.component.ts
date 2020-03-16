import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public formuChico: FormGroup;
  public luz = false;

  public arreglito: string[] = ['Primer dato', 'Segundo dato', 'Tercer dato'];

  public constructor() { }

  public ngOnInit(): void {
    this.formuChico = new FormGroup({
      dato1: new FormControl('')
    });
  }

  public switchLuz(): void {
    if (!this.luz) {
      this.luz = true;
    } else {
      this.luz = false;
    }
  }

}
