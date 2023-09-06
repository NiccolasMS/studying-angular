import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-diretivais-estruturais',
  templateUrl: './diretivais-estruturais.component.html',
  styleUrls  : ['./diretivais-estruturais.component.scss']
})
export class DiretivaisEstruturaisComponent implements OnInit {

  public condition: boolean      = true;
  public conditionClick: boolean = true;

  public list: Array<{nome: string, idade?: number}> = [{nome: 'Nicolas Moreira', idade: 20}, {nome: "Julia"}, {nome: "João"}, {nome: "Maria"}]
  public nome: string                                = "joao"
    constructor() { }
  
    ngOnInit(): void {
      setInterval(() => {
        if(this.condition) {
          this.condition = false;
          return;
        }
        this.condition = true;
      }, 2000);
    }

    public onClick(){
      if(this.conditionClick) {
        this.conditionClick = false;
        return;
      }else{
        this.conditionClick = true;
      }
    }

    public onClickAddList(){
      this.list.push({nome: "Nay", idade: 31});
    }

    public onClickEventList(event: number){
      this.list.splice(event, 1);
    }
}
