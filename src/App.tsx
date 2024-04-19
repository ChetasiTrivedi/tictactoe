import "./App.css";
import Block from "./components/Block";
import React,{useState} from "react";


function App(){
  const [state,setState]=useState(Array(9).fill(null));
  const [currentTurn,setcurrentTurn]=useState("X");
  const checkWinner=(state:any[])=>{
    const win=[
      [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    for(let i=0;i<win.length;i++){
      const[a,b,c]=win[i];
      if(state[a]!=null&&state[a]===state[b]&& state[a]===state[c]) return true;
    }
    return false;
  };
  const handle=(index:number)=>{
    const StateCopy=Array.from(state);
    StateCopy[index]=currentTurn;
    
    const win=checkWinner(StateCopy);
    if(win){
      alert(currentTurn + ' won the game');

    }
    setcurrentTurn(currentTurn==='X'?'O':'X')
    setState(StateCopy);
    


  };


  return <div className="board">
    <div className="row"><Block onClick={() => handle(0)}value={state[0]}></Block> <Block onClick={() => handle(1)} value={state[1]}></Block> <Block onClick={() => handle(2)} value={state[2]} ></Block> </div>
    <div className="row"> <Block onClick={() => handle(3)} value={state[3]} ></Block> <Block onClick={() => handle(4)} value={state[4]} ></Block> <Block onClick={() => handle(5)} value={state[5]} ></Block></div>
    <div className="row"> <Block onClick={() => handle(6)} value={state[6]} ></Block> <Block onClick={() => handle(7)} value={state[7]} ></Block> <Block onClick={() => handle(8)} value={state[8]} ></Block></div>
  </div>;
  
}
export default App;
