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
      </div>
      <div className="container">
        <div className="row">

          <div className="col-sm">
          </div>

          <div className="col-sm-6">
            <ProgramList channel={channel} />
          </div>

          <div className="col-sm">
          </div>
          
        </div>
      </div>
    </div>

  );
}

export default App;