import logo from './logo.svg';
import './App.css';

function App() {
  let data = '안녕하세요';

  return (
    <div className="App">
      <header className="gnb-header">
        <div className="logo">금심이 Blog</div>
        <div>{data}</div>
      </header>
    </div>
  );
}

export default App;
