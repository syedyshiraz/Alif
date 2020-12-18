import React, { Component } from 'react';
import Main from './Main';
import DeviceOrientation, { Orientation } from 'react-screen-orientation'
import Sidebar from './Sidebar'
import NoteForm from './NoteForm'
import NoteList from './NoteList'
import SplitPane from 'react-split-pane';
import './Split.css'
import './App.css';



class App extends Component {
  render(){
    return (
      <DeviceOrientation lockOrientation={'portrait-primary'}>
        <Orientation orientation='portrait-primary'>
          <div className="App">
            <SplitPane split="vertical" allowResize={false}>  
              <SplitPane allowResize={false}>
                <Sidebar/>
              </SplitPane>
              <SplitPane split="vertical" minSize={50} maxSize={-60}>
                <NoteList/>
                <NoteForm/>
              </SplitPane>
            </SplitPane>
          </div>
        </Orientation>
      </DeviceOrientation>

      // {/* //  <div className="App">
      // //    <Main/>
      // //  </div> */}

    );
  }
}

export default App;
