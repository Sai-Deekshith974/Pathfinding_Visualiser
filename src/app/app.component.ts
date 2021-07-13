import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pathfinding-Visualiser';
   rows=15;
  cols=50;
  ids:any[]=[];
  grids:any[]=[];
  path:any[]=[];
  toggle = true;
  source:string="1-1";
  destination:string="15-50";
  constructor(){}
  ngOnInit(){
    this.makeRows(this.rows,this.cols);
  }

makeRows(rows: number,cols: number) {
  for(let j=0;j<rows;j++){
    for(let k=0;k<cols;k++){
      this.ids.push((j+1)+"-"+(k+1));
    }
  }
  for(let i=0;i<rows*cols;i++){
    this.grids.push(i+1);
  }
};
enableDisableRule(id_value) {
  let id=document.getElementById(id_value);
  id.style.backgroundColor="red";
  if(this.toggle===true){
    this.source=id_value;
  }
  else
  {
      this.destination=id_value;
  }
  console.log(this.source+" "+this.destination);
  this.toggle=!this.toggle;
  console.log(this.path);
}
movement(id_value){
  if(this.toggle===false){
    let id=document.getElementById(id_value);
    id.style.backgroundColor="red";
    this.path.push(id_value);
  }
}
}
