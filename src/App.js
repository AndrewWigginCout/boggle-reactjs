import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
    <table>
    <tr>
      <td><Greet/></td>
      <td><Greet/></td>
      <td><Greet/></td>
    </tr>
    <tr>
      <td><Greet/></td>
      <td><Greet/></td>
      <td><Greet/></td>
    </tr>
    
    </table>
    </div>
  );
}

export default App;
