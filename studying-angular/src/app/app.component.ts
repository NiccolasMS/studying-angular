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
  <!-- <app-diretivas-atributos></app-diretivas-atributos> -->
  <!-- <app-new-component></app-new-component> -->
  <!-- <app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="add()">Add</button> -->
  <!-- <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output> -->
  <!-- <app-food-add></app-food-add>
  <app-food-list></app-food-list> -->
  <app-forms></app-forms>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{

  public destruir: boolean = true;

  public addValue: number = 0;

  public getDados?: {nome: string, idade: number}

  constructor() { }

  ngOnInit(): void {
  }

  public add(){
    this.addValue++;
  }

  public setDados(event: {nome: string, idade: number}){
    this.getDados = event;
  }

}
