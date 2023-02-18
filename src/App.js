import "./App.css";
import data from './data/data.json'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Coding Rookie</h1>
      </header>
      <div className="first-div">
        <div className="gradient-border">
          <h1>{data[0].title}</h1>
          <button>Start Now</button>
        </div>
      </div>
      <div className="second-div">
        <div className="second-div__content">
          <h1>{data[1].title}</h1>
          <p>{data[1].content}</p>
        </div>
        <div className="second-div__image">
        </div>
      </div>
      <div className="third-div">
        <div className="third-div__image"></div>
        <div>
        <h1>{data[2].title}</h1>
        <p>{data[2].content}</p>
        </div>
        </div>
      <div className="second-div">
      <div className="second-div__content">
        <h1>{data[3].title}</h1>
        <p>{data[3].content}</p>
        </div>
        <div className="fourth-div__image">
        </div>
      </div>
      <div className="fifth-div">
        <h1>{data[4].title}</h1>
        <p>{data[4].content} </p>
      </div>
      <div className="sixth-div">
        <div className="gradient-border">
        <h1>{data[5].title}</h1>
        <button>Start Now</button>
        </div>
      </div>
      <footer>
        <div>
          <h1>Coding Rookie</h1>
        </div>
        <div>
          <p>Privacy Policy</p>
          <p> | </p>
          <p>Terms of Use</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
