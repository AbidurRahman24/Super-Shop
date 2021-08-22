import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Checkout/Checkout';
import ManageProduct from './components/Order/ManageProduct/ManageProduct';
import AddProduct from './components/Order/ManageProduct/AddProduct/AddProduct';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <div >
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/admin'>
              <ManageProduct></ManageProduct>
            </Route>
            <PrivateRoute path="/product/:id">
              <Checkout></Checkout>
            </PrivateRoute>
            <PrivateRoute path='/order'>
              <Checkout></Checkout>
            </PrivateRoute>
            <Route path='/manage'>
              <ManageProduct/>
            </Route>
            <Route path='/addProduct'>
              <AddProduct></AddProduct>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
