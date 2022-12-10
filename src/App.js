import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import info from "./components/info/info";
import service from "./components/Services/Services"
import contact from "./components/Contacto/Contacto"
import 'bootstrap/dist/css/bootstrap.css';
import Garantia from "./components/Garantia/Garantia";
import Cuidado from "./components/Cuidado/Cuidado"

function App() {
  return (
    <div>
      <Nav/>
      <Route exact path= "/" component={info} />
      <Route exact path="/home" component={Home}/>
      <Route path= "/product/:id" component={ProductDetail} />
      <Route path="/products/service" component={service} />
      <Route path="/products/contact" component={contact} />
      <Route path="/products/garantia" component={Garantia} />
      <Route path="/products/cuidado" component={Cuidado} />
    </div>
  )
}
export default App;
