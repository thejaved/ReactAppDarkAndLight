import React from 'react';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/Home';
import Container from './container/Container';
const App = () => {
    return (
        <>
        <Router>
            <Header/>
            <Container>
                <Switch>
                <Route path="/">
                    <Home />
                </Route>
                </Switch>
            </Container>
        </Router>
        </>
    )
}
export default App;
