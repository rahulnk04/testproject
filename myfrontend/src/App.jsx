// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './Components/Layout/Header';
import AllEmployee from './Components/Employee/AllEmploye';
import CreateEmployee from './Components/Employee/CreateEmployee';
import ViewEmployee from './Components/Employee/ViewEmployee';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/" component={AllEmployee}/>
            <Route exact path="/home" component={AllEmployee}/>
            <Route exact path="/employeecreate" component={CreateEmployee}/>
            <Route exact path="/employee/:id" component={ViewEmployee}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
