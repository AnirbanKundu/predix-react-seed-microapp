import React from 'react'
import ReactDOM from 'react-dom';

//App component
import App from './components/App';
import Routes from './routes';

//App styles
import './styles';

ReactDOM.render(<App routes={Routes}/>, document.querySelector('#mountNode'));