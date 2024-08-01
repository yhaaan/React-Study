import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '눙눙이의 하루2';
  let [a,b] = useState('남자 코트 추천');
  
  return (
    <div className="App">
      <div className ="black-nav">
        <h4 style = {{color : 'White' , fontSize : '30px'}}>React Study Blog</h4>
      </div>
      <div className="list">
          <h4>{a}</h4>
          <p>08월 01일 발행</p>
      </div>
      <h4>{post} 후후</h4>
    </div>
  );
}

export default App;
