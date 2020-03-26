import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter, Route} from "react-router-dom";
import Navbar from './Components/Layout/Navbar';
import './App.css';
import SignedInLinks from './Components/Layout/SignedInLinks';


function App() {

    return(
        <BrowserRouter>
            <div className="App">
                <Route path="/" exact component={Navbar}/>

                <Route path="/dashboard" exact component={SignedInLinks}/>
            </div>
        </BrowserRouter>
    )
}

export default App;