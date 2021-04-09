import './App.css';
import {useState} from 'react';
import Sidebar from './components/Sidebar';
import ProgramList from './components/ProgramList';

function App() {

  const [channel , setChannel] = useState("SVT 1");

  return (
    <div className="App">
      <div>
        <Sidebar setChannel={setChannel}/>
        <ProgramList channel={channel} />
      </div>
    </div>

  );
}

export default App;