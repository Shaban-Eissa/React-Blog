import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import PostDetails from "./components/Posts/PostDetails";
import CreatePost from "./components/Posts/CreatePost";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/post/:id" component={PostDetails} />
            <Route path="/create" component={CreatePost} />
            <Route path="*" component={Error} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
