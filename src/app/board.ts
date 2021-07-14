import { Node } from './node';
export class Board
{
  ids: any[]=[]
  grids: any[]=[]
  board: any[]=[]
    makeRows(rows: number,cols: number) {
        for(let j=0;j<rows;j++){
          let rowLine=[];
          for(let k=0;k<cols;k++){
            if(j===Math.floor(rows/2) && k===Math.floor(cols/4))
              rowLine.push(new Node((j+1)+"-"+(k+1),"source"));
            else if(j===Math.floor(rows/2) && k===Math.floor(3*cols/4))
              rowLine.push(new Node((j+1)+"-"+(k+1),"target"));
            else 
              rowLine.push(new Node((j+1)+"-"+(k+1),"normal"));
            this.ids.push((j+1)+"-"+(k+1));
          }
          this.board.push(rowLine);
        }
        for(let i=0;i<rows*cols;i++){
          this.grids.push(i+1);
        }
        return this.board;
      };
      getGrid()
      {
        return this.grids;
      }
      getIds()
      {
        return this.ids;
      }
}