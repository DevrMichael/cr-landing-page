import "./App.css";
import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Coding Rookie</h1>
      </header>
      <div className="main-container main-header first-div">
        <div className="main-div">
          <h1>Get <span className="highlighted-text">Hired</span> in Under a Year</h1>
          <button>Start Now</button>
        </div>
      </div>
      <div className="flex content-header second-div">
        <div className="large-div">
          <h1>{data[1].title}</h1>
          <p>{data[1].content}</p>
        </div>
        <div className="small-div second-div__image"></div>
      </div>
    <div className="section-divider__image"></div>
      <div className="flex content-header third-div">
        <div className="large-div third-div__image"></div>
        <div className="small-div">
          <h1>{data[2].title}</h1>
          <p>{data[2].content}</p>
        </div>
      </div>
      <div className="section-divider__image"></div>
      <div className="flex content-header fourth-div">
        <div className="large-div">
          <h1>{data[3].title}</h1>
          <p>{data[3].content}</p>
        </div>
        <div className="small-div fourth-div__image"></div>
      </div>
      <div className="content-header fifth-div">
        <h1>{data[4].title}</h1>
        <p>{data[4].content} </p>
      </div>
      <div className="main-container main-header sixth-div">
        <div className="main-div">
          <h1>Make Your <span className="highlighted-text">Dreams</span> of Becoming a Developer a Reality</h1>
          <button>Start Now</button>
        </div>
      </div>
      <footer>
        <div>
          <h1>Coding Rookie</h1>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <p> | </p>
          <a href="#">Terms of Use</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
