import './App.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Context/AuthProvides';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import PackageBooking from './Pages/Home/PackageBooking/PackageBooking/PackageBooking';
import MyBookings from './Pages/Home/Bookings/MyBookings/MyBookings';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import ManageBookings from './Pages/Home/ManageBookings/ManageBookings/ManageBookings';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import AddNewPackage from './Pages/Home/AddNewPackage/AddNewPackage';
import AllPackages from './Pages/Home/AllPackage/AllPackage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/home"><Home /></Route>
            <Route path="/allPackage"><AllPackages /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/register"><Register /></Route>
            <PrivateRoute path="/packages/:packageId"><PackageBooking /></PrivateRoute>
            <PrivateRoute path="/bookings"><MyBookings /></PrivateRoute>
            <PrivateRoute path="/addPackage"><AddNewPackage /></PrivateRoute>
            <PrivateRoute path="/manageBookings"><ManageBookings /></PrivateRoute>
            <Route path="*"><NotFound /></Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
