import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

let [postName, postNamefunction] = useState( ['How you like that 가사 해석', 'lovesick girl' , 'Kill this love'] );
let [like, likePlus] = useState(0);
let [modal, modalfunction] = useState(false);
let [postNum, postNumFunction] = useState(0);
let [input, inputFunction] = useState('');

function postNameChange (){
  var newArray = [...postName];
  newArray[0] = 'Ice cream 가사 해석';
  newArray.sort();
  postNamefunction( newArray );
}

function postNameAdd (){
  var arrayCopy = [...postName];
  arrayCopy.unshift(input);
  postNamefunction( arrayCopy );
}

function postList(){
  var newArray = [];
  for (var i = 0; i < 3; i++){
    newArray.push(
      <li className="post-item">
        <h3 onClick={ () => { postNumFunction(i) } }> 글제목 <span onClick={ () => { likePlus(like + 1) } }>😊</span> {like} </h3>
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
        postName.map((title, i)=>{
          return(
            <li className="post-item" key={ i }>
              <h3 onClick={ () => {  postNumFunction(i) } }> { title } <span onClick={ () => { likePlus(like + 1) } }>😊</span> {like} </h3>
              <span>2021.08.21</span>
            </li> 
          )
        })
      }
      </ol>



      <div>
        <input onChange={ (e) => { inputFunction(e.target.value) } }></input>
        <button onClick={ postNameAdd }>전송</button>
      </div>

      {/* {input}
      <input onChange={ (e) => { inputFunction(e.target.value) } }></input> */}

      <Profile></Profile>

<button type="button" onClick={ () => { modalfunction(!modal) } }>버튼</button>

{
  modal === true
  ? <Modal postName={postName} postNum={postNum}></Modal>
  : null
}

    </div>
  );
}

class Profile extends React.Component {
  constructor(){
    super();
    this.state = { name : "Lee", age : 28 }
  }

changeName = () => {
 this.setState( {name : "Kim"} )
}

  render(){
    return(
      <div>
        <div>프로필 영역</div>
        <strong>저는 { this.state.name } 입니다.</strong>
        <button type="button" onClick={ this.changeName }>이름바꾸기</button>
      </div>
    );
  }
}

function Modal(props){
  return (
    <div className="modal">
      <h3> { props.postName[props.postNum] }</h3>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
