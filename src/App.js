import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '도토리도굴단';
  let [title,setTitle] = useState(['햄스토리','햄파이어','햄파이트']);
  let [likes,setLikes] = useState([0,20,30]);
  let [modal,setModal] = useState(false);
  
  function likeUp(i){
    let copy = [...likes];
    copy[i] = copy[i]+1;
    setLikes(copy);
  }
  function hw(){
    let copy = [...title];
    copy[0] = '햄스토리 짱';
    setTitle(copy);
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
    setTitle(copy);
  }

  return (
    <div className="App">
      <div className ="black-nav">
        <h4 style = {{color : 'White' , fontSize : '30px'}}>React Study Blog</h4>
      </div>
      <button onClick={sort}>가나다순 정렬</button>

      {
        title.map(function(name,i){
          return (
          <div className="list">
            <h4 onClick={()=>{setModal(!modal)}}>{name} <span onClick={()=>likeUp(i)}>❤️</span> {likes[i]} </h4>
            <p>240801</p>
          </div>
          )
        })
      }



      <h4><span onClick={hw}>{post}</span></h4>

      
      {
        modal ? <Modal color={'skyBlue'} title={title} change ={hw}/> : null
      }
      
    </div>
  );
}

function Modal(props){
  return (
    <div className='modal' style={{background:props.color}}>
        <h4>{props.title[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={props.change}>글수정</button>
      </div>
  )
}


export default App;
