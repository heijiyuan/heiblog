import {  Provider  } from 'react-redux';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import store from './models/index'
import home from './modules/home/index'
import aboutme from './modules/aboutme/index'
function App() {
  return (
    <Provider store={store}>
     <Router>
       <Switch>
            <Route path="/about"  component={aboutme}/>
            <Route path="/" exact component={home}/>
       </Switch>
     </Router>
   </Provider>
  );
}

export default App;
