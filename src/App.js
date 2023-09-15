import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [counter,Setcounter] = useState(0)
  let add_updater = () =>{
    if(counter < 20){
      Setcounter(counter = counter +  1)
    }
    else{
    alert("You Have Reched the Limit")
  }
  }
  let decrese_updater = () =>{
    if(counter > 0){
      Setcounter(counter = counter - 1)
    }
    else{
    alert("You can Not go Below 0")
  }
  }
  const default_color= () =>(document.body.style.backgroundColor = 'olive')
  const [colors, setColors] = useState(default_color);
  const change_color = () =>(setColors(document.body.style.backgroundColor = 'red'))
  const change_color_1 = () =>(setColors(document.body.style.backgroundColor = 'blue'))
  const change_color_2 = () =>(setColors(document.body.style.backgroundColor = 'green'))
  const change_color_3 = () =>(setColors(document.body.style.backgroundColor = 'orange'))
  const change_color_4 = () =>(setColors(document.body.style.backgroundColor = 'purple'))
  const change_color_5 = () =>(setColors(document.body.style.backgroundColor = 'brown'))
  const change_color_6 = () =>(setColors(document.body.style.backgroundColor = 'silver'))
  return (
    <>
    <h1 className='heading_1'>Welome to First Project</h1><br/><br/>
    <h2 className='heading_1'>Counter: {counter}</h2>
    <button className='button_changer'
     onClick={add_updater}>Increase Value</button><br/><br/>
    <button className='button_changer'
    onClick={decrese_updater}>Decrease Value</button><br/><br/>
    <div className='App'>
      <div className='border_1'>
      <button className='borders' style={{backgroundColor:'red'}}
      onClick={change_color}
      onDoubleClick={default_color}
      >
      RED</button>
      <button className='borders' style={{backgroundColor:'blue'}}
      onClick={change_color_1}
      onDoubleClick={default_color}
      >
      BLUE</button>
      <button className='borders' style={{backgroundColor:'green'}}
      onClick={change_color_2}
      onDoubleClick={default_color}
      >
      GREEN</button>
      <button className='borders' style={{backgroundColor:'orange'}}
      onClick={change_color_3}
      onDoubleClick={default_color}
      >
      ORANGE</button>
      <button className='borders' style={{backgroundColor:'purple'}}
      onClick={change_color_4}
      onDoubleClick={default_color}
      >
      PURPLE</button>
      <button className='borders' style={{backgroundColor:'brown'}}
      onClick={change_color_5}
      onDoubleClick={default_color}
      >
      BROWN</button>
      <button className='borders' style={{backgroundColor:'silver'}}
      onClick={change_color_6}
      onDoubleClick={default_color}>
      SILVER</button>
      </div>
    </div>
    </>
  );
}

export default App;
