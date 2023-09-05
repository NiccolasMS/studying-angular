import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <app-diretivas-atributos>
    <h1>Aulas de diretivas atributos</h1>
    <h3>Teste</h3>
  </app-diretivas-atributos>
  <app-diretivas-atributos>
    <h1>Nicolas</h1>
    <h3>Moreira</h3>
  </app-diretivas-atributos> -->
  <app-diretivas-atributos></app-diretivas-atributos>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{

  public destruir: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
