import react, { useEffect, useState } from "react";
import { Button, Container } from "semantic-ui-react";

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
      <p key = {i.id} > {index+1}. {i}</p>
      )
    })
  }

  // setToggle(true)
  return (
    <Container>
      <h1>Welcome to Rock Paper Scissors</h1>
      <Button.Group>
        <Button onClick= {()=> setPlayer(options[0])}>Rock</Button>
        <Button onClick= {()=> setPlayer(options[1])}>Paper</Button>
        <Button onClick= {()=> setPlayer(options[2])}>Scissors</Button>
      </Button.Group>
        <p>Player Score: {score.player} Computer Score: {score.comp} Draws: {score.draw}</p>
        <Button onClick= {()=> setClear(true)}>Clear</Button>
        {renderRecord()}
    </Container>
  );
}

export default App;
