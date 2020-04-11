import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../components/screens/Home";
import { MailInRepair } from "../components/screens/MailInRepair";
import { FAQ } from '../components/screens/FAQ/FAQ'
import { About }   from '../components/screens/About';
import Details from '../components/screens/Details'
import Default from "../components/screens/Default";
import ProductList from "../components/screens/ProductList";
import Cart from '../components/screens/Cart/Cart'
import Modal from '../components/screens/Modal'
import  weCome from '../components/screens/weComeToYou/weCome';

export const Routes = props => {
  return (
    <>
      <Switch>
        {/* Home Route (/) */}
          <Route exact path="/" component={Home} />

        {/* Services Route (/services) */}
          {/* <Route path to='/services'component={} /> */}

        {/* Mail In Repair Route (/mail-in-repair) */}
          <Route exact path="/mail-in-repair" component={MailInRepair} />

        {/* We Come To You Page (/book-online) /> */}
          <Route exact path='/1234' component={weCome}/>

        {/* About Route (/about) */}
          <Route exact path='/about'component={About} />

        {/* FAQ Route (/FAQ) */}
          <Route exact path='/FAQ' component={FAQ}/>

        {/* Store Route (/store) */}
          <Route path='/store' component={ProductList} />

        {/* Details Route (/details) */}
        <Route path='/details' component={Details} />

        {/* Cart Route (/cart) */}
        <Route path='/cart' component={Cart} />

        {/* Route Not Found (none) */}
        <Route component={Default} />

      </Switch>
      <Modal/>
    </>
  );
};