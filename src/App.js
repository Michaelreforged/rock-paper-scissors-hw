import react, { useEffect, useState } from "react";
import { Button, Container, Image, Segment } from "semantic-ui-react";
import styled from "styled-components";
import Paper from "./images/Paper.png"
import Rock from "./images/Rock.png"
import Scissors from "./images/Scissors.png"

function App() {
  const[player,setPlayer] = useState(null);
  const[comp,setComp] = useState(null);
  const[score,setScore] = useState({player: 0, comp: 0, draw: 0});
  const [record,setRecord] = useState([])
  const [clear,setClear] = useState(false)

  const options =  ["rock", "paper", "scissor"];

  useEffect(() => {
    console.log("Computer is choosing...")
  },[score])
  
  useEffect(() => {
    setComp(options[Math.floor(Math.random()*3)])
    win()
    setPlayer(null)
  },[player])

  useEffect(() => {
    setRecord([])
    setScore({player: 0, comp: 0, draw: 0})
    setClear(false)
  },[clear])
  
  const win = () => {
    console.log("in win function")
    console.log(`computer chooses ${comp}`)
    console.log(`Player chooses ${player}`)
    if(player === null){
      return
    }else if(comp === player){
      console.log("draw");
      let newRecord = (`Player used ${player} and Computer used ${comp} and ended in a draw`)
      setRecord([...record, newRecord])
      let temp = score.draw + 1;
      return setScore({...score, draw: temp});
    }else if(player === options[0]){
      if(comp === options[1]){
        console.log("Player lose");
        let newRecord = (`Player used ${player} and Computer used ${comp} and Player Loss`)
        setRecord([...record, newRecord])
        let temp = score.comp + 1;
        return setScore({...score, comp: temp}); 
      }
      else if(comp === options[2]){
        console.log("Player Win");
        let newRecord = (`Player used ${player} and Computer used ${comp} and Player Won`)
        setRecord([...record, newRecord])
        let temp = score.player + 1
        return setScore({...score, player: temp})
      }
    }else if(player === options[1]){
      if(comp === options[2]){
        console.log("Player lose")
        let newRecord = (`Player used ${player} and Computer used ${comp} and Player Loss`)
        setRecord([...record, newRecord])
        let temp = score.comp + 1
        return setScore({...score, comp: temp});
      }
      else if(comp === options[0]){
        console.log("Player Win");
        let newRecord = (`Player used ${player} and Computer used ${comp} and Player Won`)
        setRecord([...record, newRecord])
        let temp = score.player +1
        return setScore({...score, player: temp})
      }
    }else{
      if(comp === options[0]){
        console.log("Player lose")
        let newRecord = (`Player used ${player} and Computer used ${comp} and Player Loss`)
        setRecord([...record, newRecord])
        let temp = score.comp + 1
        return setScore({...score, comp: temp});
      }
      else if(comp === options[1]){
        console.log("Player Win");
        let newRecord = (`Player used ${player} and Computer used ${comp} and Player Won`)
        setRecord([...record, newRecord])
        let temp = score.player +1
        return setScore({...score, player: temp})
      }
    }
  }

  const renderRecord = () =>{
    return record.map((i, index)=>{
      return(
        <Segment>
      <p key = {i.id} > {index+1}. {i}</p>
      </Segment>
      )
    })
  }

  return (
    <Container>
      <h1>Welcome to Rock Paper Scissors</h1>
      <Segment>
        <Imagestd src={Rock} onClick= {()=> setPlayer(options[0])}/>
        <Imagestd src={Paper} onClick= {()=> setPlayer(options[1])}/>
        <Imagestd src={Scissors} onClick= {()=> setPlayer(options[2])}/>
      </Segment>
      <Segment>
        <p>Player Score: {score.player} Computer Score: {score.comp} Draws: {score.draw}</p>
        </Segment>
        <Button onClick= {()=> setClear(true)}>Clear</Button>
        {renderRecord()}
    </Container>
  );
}

const Imagestd = styled.img`
max-height: 150px;
`

export default App;

