import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router,Switch,Route  } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Order from './Pages/Order/Order';
import MyOrder from './Dashboard/MyOrder/MyOrder';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Dashboard/Dashboard/Dashboard';
import ManageAllOrder from './Pages/ManageAllOrder/ManageAllOrder';
import Review from './Pages/Review/Review';
import AddANewItem from './Pages/AddANewItem/AddANewItem';
import Pay from './Dashboard/Pay/Pay';
import MakeAdmin from './Dashboard/MakeAdmin/MakeAdmin';



function App() {
  return (
    <div className="App">
  
  <AuthProvider>
      <Router>
          <Navigation></Navigation>

        <Switch>

          <Route exact path='/' >
            <Home></Home>
          </Route>

          <Route  path='/home' >
            <Home></Home>
          </Route>

          <Route  path='/explore' >
            <Explore></Explore>
          </Route>

           <Route  path='/login' >
            <Login></Login>
          </Route>


          <PrivateRoute path='/order/:detailId' >
            <Order></Order>
           </PrivateRoute>

           <Route path='/myOrders'>
             <MyOrder></MyOrder>
           </Route>

           <Route path='/dashboard'>
             <Dashboard></Dashboard>
           </Route>

           <Route  path="/register">
              <Register />
            </Route>

           <Route path='/manageAllOrder'>
             <ManageAllOrder></ManageAllOrder>
           </Route>

           <PrivateRoute  path='/addANewItem' >
             <AddANewItem></AddANewItem>
           </PrivateRoute>
           

           <Route path='/review'>
             <Review></Review>
           </Route>

           <Route path='/makeAdmin'>
             <MakeAdmin></MakeAdmin>
           </Route>

           <Route path='/pay'>
             <Pay></Pay>
           </Route>

        </Switch>

      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
