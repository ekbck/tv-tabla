import './App.css';
import Sidebar from './components/Sidebar';
import ProgramList from './components/ProgramList';

function App() {
  return (
    <div className="App">

      <div>
        <Sidebar />
      </div>

      <div className="container">
        <div className="row">

          <div className="col-sm">

          </div>

          <div className="col-sm-6">
            <ProgramList />
          </div>

          <div className="col-sm">

          </div>

        </div>
      </div>

    </div>
  );
}

export default App;