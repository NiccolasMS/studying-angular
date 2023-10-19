import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{

  public listComidas: Array<{comida: string, preco: string}> = [
    {comida: 'Pizza', preco: "10"},
    {comida: 'Hamburguer', preco: "15"},
    {comida: 'Batata Frita', preco: "5"},
  ];

  constructor() { }

  ngOnInit(): void {

  }

  public submitForm(form: NgForm){
    console.log(form.value);
  }
}
