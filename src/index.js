import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducer/reducer';
import App from './components/app/App';

const store = createStore(reducer);

const update = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, document.getElementById("root"));
}
update();

store.subscribe(update);