import './App.css';
import TopControl from './components/TopControl';
import Sidebar from './components/Sidebar';
 
function App() {
  return (
    <div className="App">
        <h4>Item View</h4>
      <div className='container'>
        <Sidebar></Sidebar>
        <TopControl  ></TopControl>
      </div>
     
    </div>
  );
}

export default App;
