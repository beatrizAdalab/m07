import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header'
import LoginContext from './context/LoginContext'
import ListClassifieds from './components/ListClassifieds'
import DetailClassifieds from './components/DetailClassified'
import NewClassified from './components/NewClassified'




class App extends Component {

  render() {
    return (
      <Router>
        <LoginContext>
          <div className='App bg-light'>
            <Header />
            <main className='container'>
              <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/listClassifieds/:queries' component={ListClassifieds} />
                <Route path='/detailClassifieds/:id' component={DetailClassifieds} />
                <Route path='/newClassified' component={NewClassified} />
                <Redirect to='/login' />
              </Switch>
            </main>
          </div>
        </LoginContext>
      </Router>
    );
  }
}

export default App;

