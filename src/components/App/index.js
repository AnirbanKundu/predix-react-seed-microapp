import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import {HashRouter as Router} from 'react-router-dom';

//If using HTML5 Router
//import createBrowserHistory from 'history/createBrowserHistory';
//const history = createBrowserHistory();

//Components
import { AppNav } from 'predix-ui';

//Pages
//TODO - Move to routes file / lazy load pages
import NoMatch from '../../pages/error';
import Home from '../../pages/home';
import About from '../../pages/about';
import Dashboard from '../../pages/dashboard';
import Topics from '../../pages/topics';
import Users from '../../pages/users';



// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      navItems: props.navItems || []
    };
  }
  componentDidMount(){
    fetch('/api/nav').then(resp => resp.json()).then(json => this.setState({navItems: json}));
  }
  changeRoute(e){
    //If using HashRouter
    window.location.hash = e.selectedItem.path;
    //If using HTML5 Router
    //window.location.pathname = e.selectedItem.path;
    console.log(e);
  }
  render() {
    const {routes} = this.props;
    return (
      <Router>
      <div>
        <AppNav items={this.state.navItems}  onChange={(e) => this.changeRoute(e)}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/topics" component={Topics}/>
          <Route exact path="/users" component={Users}/>
          <Route component={NoMatch}/>
          
        </Switch>
      </div>
    </Router>)
  }
}