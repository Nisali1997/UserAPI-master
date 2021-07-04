import './App.css';
import Navbar from './navBar/navBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RegistrationType from './Registration/RegistrationType'
import ParticipentRegistration from './Registration/Participent_Registration';
import Presenter from './Registration/WSPresenter_Registration';
import Researcher from './Registration/Researcher_Registration';
import Workshop from './Registration/Workshop_Registration';
import Login from './Login/Login';
import CallForPapers from './callForPapers/Call_For_Papers';
import Home from './Home/home';
import LoginFormAttendee from './Login/loginFormAttendee';
import LoginFormResearcher from './Login/loginFormReseacher';
import LoginFormWorkshopConductor from './Login/loginFormWorkshopConductor';
import ResearchActivity from './Registration/ResearchActivity';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <section>
         <Switch>
           <Route path="/home" component={Home}/>
           <Route path="/reg-type" component={RegistrationType}/>
           <Route path="/participent" component={ParticipentRegistration}/>
           <Route path="/ws_presenter" component={Presenter}/>
           <Route path="/researcher" component={Researcher}/>
           <Route path="/workshop" component={Workshop}/>
           <Route path="/login" component={Login}/>
           <Route path= "/callForPapers" component = {CallForPapers} exact/>

           <Route path="/loginFormAttendee" component={LoginFormAttendee}/>
           <Route path="/loginFormResearcher" component={LoginFormResearcher}/>
           <Route path="/loginFormWorkshopConductor" component={LoginFormWorkshopConductor}/>
           <Route path="/ractivities" component={ResearchActivity}/>

         </Switch>
       </section>
     </Router>

    
    </div>
  );
}

export default App;
