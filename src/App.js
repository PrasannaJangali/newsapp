import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import News  from './components/News';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
export default function  App  (){
  const apikey="ce79f16ce55f4cb09b9edd142bd09d46";
    return ( 
      <>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" > <News   apikey={apikey} pagesize={9} category="general"/></Route>
        <Route exact path="/general" > <News   apikey={apikey} pagesize={9} category="general"/></Route>
        <Route exact path="/science" > <News   apikey={apikey} pagesize={9} category="science"/></Route>
        <Route exact path="/entertainment" > <News   apikey={apikey} pagesize={9} category="entertainment"/></Route>
        <Route exact path="/sports" > <News  pagesize={9} apikey={apikey} category="sports"/> </Route>
        <Route exact path="/business"  > <News  pagesize={9} apikey={apikey} category="business"/></Route>
      </Switch>
      </Router>
     </>
    )
}

