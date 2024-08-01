import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '도토리도굴단';
  let [title,set_title] = useState(['햄스토리','햄파이어','햄파이트']);
  let [like,set_like] = useState(0);
  
  function likeUp(){
    set_like(like+1);
  }
  function hw(){
    let copy = [...title];
    copy[0] = '햄스토리 짱';
    set_title(copy);
  }
  function sort(){
    let copy = [...title];
    for(let j=0; j<copy.length;j++){
      for(let i=1; i<copy.length;i++){
        if(copy[i-1]>copy[i]){
          let temp = copy[i-1];
          copy[i-1] = copy[i];
          copy[i] = temp;
        }
      }
    }
    set_title(copy);
  }

  return (
    <div className="App">
      <div className ="black-nav">
        <h4 style = {{color : 'White' , fontSize : '30px'}}>React Study Blog</h4>
      </div>
      <button onClick={sort}>가나다순 정렬</button>
      <div className="list">
        <h4>{title[0]} <span onClick={likeUp}>❤️</span> {like} </h4>
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
      <h4><span onClick={hw}>{post}</span></h4>
      
    </div>
  );
}

export default App;
