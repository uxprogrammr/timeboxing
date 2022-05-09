import logo from "./logo.svg";
import "./App.css";
import Counter from "./practice/Counter";

function WelcomeMessage(props) {
  return (
    <div>
      <p>Welcome, Hello React and JSX! - {props.name}</p>
      {props.children}
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter initialValue={5} initialIncrement={10} />
        <WelcomeMessage name={"Ivan Lim"}>
          <h1>This is a sample message</h1>
          <p>Sample paragraph in children component.</p>
        </WelcomeMessage>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
