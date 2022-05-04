import {  Provider  } from 'react-redux';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Loadable from '@loadable/component'
import store from './models/index'
import 'antd/dist/antd.css';
import './App.css'

const Home=Loadable(()=>import('./modules/home/index'));

const Index=Loadable( ()=>import('./modules/index/index'));

const speak=Loadable(()=>import('./modules/speak/index'));

const Detail=Loadable(()=>import('./modules/detail/index'));

const Aboutme=Loadable(()=>import('./modules/aboutme/index'));
function App() {
  return (
    <Provider store={store}>
     <Router>
       <Switch>
            <Route path="/about"  component={Aboutme}/>
            <Route path="/speak"  component={speak}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/" exact component={Index}/>
       </Switch>
     </Router>
   </Provider>
  );
}

export default App;