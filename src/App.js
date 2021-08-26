import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

let [postName, postNamefunction] = useState( ['How you like that 가사 해석', 'Kill this love', 'lovesick girl'] );
let [like, likePlus] = useState(0);

function postNameChange (){
  var newArray = [...postName];
  newArray[0] = 'Ice cream 가사 해석';
  postNamefunction( newArray );
}


  return (
    <div className="App">
      <header className="gnb-header">
        <h1 className="logo">금심이 Blog</h1>
      </header>
      <button type="button" onClick={ postNameChange }>Ice cream</button>
      <ol className="post-list">
        <li className="post-item">
          <h3>{ postName[0] } <span onClick={ () => { likePlus(like + 1) } }>😊</span> {like} </h3>
          <span>2021.08.25</span>
        </li>
        <li className="post-item">
          <h3>{ postName[1] }</h3>
          <span>2021.08.21</span>
        </li>  
        <li className="post-item">
          <h3>{ postName[2] }</h3>
          <span>2021.08.14</span>
        </li>
      </ol>
    </div>
  );
}

export default App;
