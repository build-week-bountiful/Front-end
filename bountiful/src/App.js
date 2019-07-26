import React,{Component} from 'react';
import './App.css';
import StoriesForm from "./components/Stories/StoriesForm";
class App extends Component {
  render(){
      return (
        <div className="App">
        <h1>Bountiful App</h1>
        <div>
          <StoriesForm/>
        </div>
      </div>
    );
}
}

export default App;
