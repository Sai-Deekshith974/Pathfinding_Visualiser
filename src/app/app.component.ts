import { Component } from '@angular/core';
import { Board } from './board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pathfinding-Visualiser';
  rows=15;
  cols=50;
  board;
  main;
  toggle = true;
  source:string="1-1";
  destination:string="15-50";
  path:any[]=[];
  ids:any[]=[];
  grids:any[]=[];

  constructor(){}

  ngOnInit(){
    this.main=new Board();
    this.board=this.main.makeRows(this.rows,this.cols);
    this.ids=this.main.getIds();
    this.grids=this.main.getGrid();
  }


  enableDisableRule(id_value) {
    let id=document.getElementById(id_value);
    id.style.backgroundColor="red";
    if(this.toggle===true){
      this.source=id_value;
      this.path.push(id_value);
    }
    else
    {
        this.destination=id_value;
    }
    this.toggle=!this.toggle;
    for(let i=0;i<this.path.length;i++)
    {
      let indices=this.path[i].split('-');
      let row=parseInt(indices[0]);
      let col=parseInt(indices[1]);
      this.board[row-1][col-1].status="wall";
    }
  }


  movement(id_value){
    if(this.toggle===false){
      let id=document.getElementById(id_value);
      id.style.backgroundColor="red";
      this.path.push(id_value);
    }
  }
}
