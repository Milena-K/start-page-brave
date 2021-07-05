import './App.css';
import flowers from './images/flowers2.png';
import Board from './Board.js';

function App() {
  return (
    <div className="App">
      <Board/>
      <div className="footer">
        <div className="bottom-img">
          <img src={flowers} alt="flowers"/>
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
