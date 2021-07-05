import "./App.css";
import Navbar from "./navBar/navBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationType from "./Registration/RegistrationType";
import ParticipentRegistration from "./Registration/Participent_Registration";
import Presenter from "./Registration/WSPresenter_Registration";
import Researcher from "./Registration/Researcher_Registration";
import Workshop from "./Registration/Workshop_Registration";
import Login from "./Login/Login";
import CallForPapers from "./callForPapers/Call_For_Papers";
import Home from "./Home/home";
import LoginFormAttendee from "./Login/loginFormAttendee";
import LoginFormResearcher from "./Login/loginFormReseacher";
import LoginFormWorkshopConductor from "./Login/loginFormWorkshopConductor";
import AdminNavbar from "./AdminNavBar/AdminNavBar";
import EditorHomePage from "./Editor/EditorHomePage";
import CreateConference from "./Editor/AddConference";
import ViewConferences from "./Editor/ViewAllConferences";
import ViewCetainConference from "./Editor/ViewCertainConference";

import testRegistration from "./Registration/testRegistration";
import viewPDFClass from "./Registration/viewPDF";
import viewWorkshopProposals from "./Registration/viewWorkshopProposals";
import PresenterRegistration from "./Registration/Presenter_Registration";
import approveWorkshopProposals from "./Reviewer/approveWorkshopProposals";
import viewResearchPapers from "./Registration/viewResearchPapers";
import ResearcherRegistration from "./Registration/Registration_Researcher";
import ReviewerHomePage from "./Reviewer/ReviewerHomePage";
import viewApConferences from "./Registration/viewApConferences";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <section>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/reg-type" component={RegistrationType} />
            <Route path="/participent" component={ParticipentRegistration} />
            <Route path="/ws_presenter" component={Presenter} />
            <Route path="/researcher" component={Researcher} />
            <Route path="/workshop" component={Workshop} />
            <Route path="/login" component={Login} />

            <Route path="/testRegistration" component={testRegistration} />
            <Route path="/viewPDFClass" component={viewPDFClass} />
            <Route
              path="/approveWorkshopProposals"
              component={approveWorkshopProposals}
            />
            <Route
              path="/viewWorkshopProposals"
              component={viewWorkshopProposals}
            />
            <Route path="/viewResearchPapers" component={viewResearchPapers} />
            <Route
              path="/presenterRegistration"
              component={PresenterRegistration}
            />
            <Route
              path="/researcherRegistration"
              component={ResearcherRegistration}
            />
            <Route path="/viewApConferences" component={viewApConferences} />

            <Route path="/callForPapers" component={CallForPapers} exact />

            <Route path="/loginFormAttendee" component={LoginFormAttendee} />
            <Route
              path="/loginFormResearcher"
              component={LoginFormResearcher}
            />
            <Route
              path="/loginFormWorkshopConductor"
              component={LoginFormWorkshopConductor}
            />
            <Route path="/adminNavbar" component={AdminNavbar} />
            <Route path="/editor" component={EditorHomePage} />
            <Route path="/editorCreate" component={CreateConference} />
            <Route path="/editorView" component={ViewConferences} />
            {/* <Route path="/:id" component={ViewCetainConference} /> */}
            <Route path="/reviewer" component={ReviewerHomePage} />
          </Switch>
        </section>
      </Router>

      <Router>
        <section>
          <Switch>
            <Route path="/AdminNavBar/AdminNavBar">
              <AdminNavbar />
            </Route>
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
