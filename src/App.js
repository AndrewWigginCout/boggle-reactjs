import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
    <table>
    <tr>
      <td><Greet char="B"/></td>
      <td><Greet char="A"/></td>
      <td><Greet char="D"/></td>

    </tr>
    <tr>
      <td><Greet char="D"/></td>
      <td><Greet char="O"/></td>
      <td><Greet char="G"/></td>
    </tr>
    
    </table>
    </div>
  );
}

export default App;
