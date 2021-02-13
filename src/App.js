import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StateProvider } from './context/AppContext';
import Admin from './pages/Admin/index';
import { City } from './pages/City/index';
import DataTypes from './pages/DataTypes/index';
import DateTime from './pages/DateTime/index';
import Home from './pages/Home/index';
import Settings from './pages/Settings';
import { initialState, reducer } from './reducers/appReducer';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/city" component={City} />
            <Route exact path="/datatypes" component={DataTypes} />
            <Route exact path="/datetime" component={DateTime} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </Router>
      </StateProvider>
    </ThemeProvider>
  );
}

export default App;
