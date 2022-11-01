import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Jsx from './components/Jsx';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind />
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Greet name="Zoki" heroName="Flash" artistName="2Pac">
        <p>children props</p>
        <p>a web developer</p>
      </Greet> */}
      {/* <Welcome name="Zoki" heroName="Flash" /> */}
      {/* <Jsx /> */}
      {/* <Message /> */}
    </div>
  );
}

export default App;
