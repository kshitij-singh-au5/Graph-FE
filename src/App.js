import React from 'react';
import './App.css';
import Sidebar1 from './components/Sidebar'
import Form from './components/Form'
import Graph from './components/Graph'
import Tables from './components/Table'


function App() {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar1></Sidebar1>
        </div>
        <div className="col-10 mt-5">
          <div className="row ml-5">
            <div className="col-3 shadow border">
              <Form></Form>
            </div>
            <div className="col-7 shadow border ml-5">
              <Graph></Graph>
            </div>
          </div>
          <hr className="ml-5 mr-5"></hr>
          <div className="row ml-5 mr-3">
            <div className="col-11">
              <Tables></Tables>
            </div>

          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
