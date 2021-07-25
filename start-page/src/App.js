import './App.css';
import monkey from './images/pretty.svg';
import Board from './Board.js';
import Clock from './Clock.js';
import Weather from './Weather.js';

function App() {
  return (
    <div className="App">
      <Clock/>
      <Weather/>
      <Board/>
      <div className="footer">
        <div className="bottom-img">
          <img src={monkey} alt="monkey"/>
        </div>
      </div>
    </div>
  );
}

export default App;

/* A white box in the corner of the screen
      <div className="the-big-question">
         <p className="question">
           What?
         </p>
       </div>
 */
