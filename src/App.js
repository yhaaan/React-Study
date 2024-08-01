import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '눙눙이의 하루3';
  let [title,set_tltle] = useState(['햄스토리','햄파이어','햄파이트']);
  
  return (
    <div className="App">
      <div className ="black-nav">
        <h4 style = {{color : 'White' , fontSize : '30px'}}>React Study Blog</h4>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
        <p>240801</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>240801</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>240801</p>
      </div>
      <h4>{post} 후후</h4>
      
    </div>
  );
}

export default App;
