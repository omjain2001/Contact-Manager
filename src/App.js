import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { About } from "./components/pages/about";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import AddContacts from "./components/contacts/AddContacts";
import EditContact from "./components/contacts/EditContact";
import notFound from "./components/pages/notFound";
import { Provider } from "./Context";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/addContact" component={AddContacts} />
              <Route exact path="/editContact/:id" component={EditContact} />
              <Route component={notFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
