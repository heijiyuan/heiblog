import {  Provider  } from 'react-redux';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import store from './models/index'
import Home from './modules/home/index'
import Detail from './modules/detail/index'
import 'antd/dist/antd.css';
import Aboutme from './modules/aboutme/index'
import speak from './modules/speak/index'
function App() {
  return (
    <Provider store={store}>
     <Router>
       <Switch>
            <Route path="/about"  component={Aboutme}/>
            <Route path="/speak"  component={speak}/>
            <Route path="/detail" exact component={Detail}/>
            <Route path="/" exact component={Home}/>
       </Switch>
     </Router>
   </Provider>
  );
}

export default App;
