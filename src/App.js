import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

let [postName, postNamefunction] = useState( ['How you like that 가사 해석', 'lovesick girl' , 'Kill this love'] );
let [like, likePlus] = useState(0);
let [modal, modalfunction] = useState(false);

function postNameChange (){
  var newArray = [...postName];
  newArray[0] = 'Ice cream 가사 해석';
  newArray.sort();
  postNamefunction( newArray );
}

function postList(){
  var newArray = [];
  for (var i = 0; i < 3; i++){
    newArray.push(
      <li className="post-item">
        <h3 onClick={ () => { modalfunction(!modal) } }> 글제목 <span onClick={ () => { likePlus(like + 1) } }>😊</span> {like} </h3>
        <span>2021.08.21</span>
      </li>
    );
  }  

  return newArray;
}

  return (
    <div className="App">
      <header className="gnb-header">
        <h1 className="logo">금심이 Blog</h1>
      </header>
      <button type="button" onClick={ postNameChange }>Ice cream</button>
      <ol className="post-list">
      {
        postName.map((title)=>{
          return(
            <li className="post-item">
              <h3 onClick={ () => { modalfunction(!modal) } }>{ title }  <span onClick={ () => { likePlus(like + 1) } }>😊</span> {like} </h3>
              <span>2021.08.21</span>
            </li> 
          )
        })
      }
      </ol>







<button type="button" onClick={ () => { modalfunction(!modal) } }>버튼</button>

{
  modal === true
  ? <Modal></Modal>
  : null
}

    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h3>글제목</h3>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
