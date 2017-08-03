import React from 'react';
import {Route} from 'react-router'
import TodosContainer from '../containers/TodosContainer'
import App from '../App'

export default (
  <Route path='/' component={App}>
    <Route path='/todos' component={TodosContainer}/>
  </Route>
)
