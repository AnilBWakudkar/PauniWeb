import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import { Route, Switch } from 'react-router-dom';

import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Latestnews from './Pages/Latestnews';
import AdminPage from './Admin/AdminPage';
import Login from "./Admin/Login";




function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Main/> */}
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/latestnews" exact component={Latestnews}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/login" exact component={Login}></Route>
        {/* <Route path="/adminpage" exact component={AdminPage}></Route> */}
        
      </Switch>
        {/* <Login/> */}

      <Footer />
    </div>
  );
}

export default App;
