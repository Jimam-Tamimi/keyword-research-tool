import { Route } from "react-router-dom";
import Layout from "./hoc/Layout";
import PrivateRoute from "./hoc/PrivateRoute"
import GuestRoute from "./hoc/GuestRoute"



import Home from "./pages/dashboard/Home";

import Login from "./pages/account/Login";
import Signup from "./pages/account/Signup";
import ResetPassword from "./pages/account/ResetPassword";
import Activate from "./pages/account/Activate";
import KeywordResearch from "./pages/dashboard/KeywordResearch";
import SearchConsole from "./pages/dashboard/SearchConsole";


function App() {
  
  return (
    <>
      <Layout>
        <PrivateRoute>
          <Route exact path='/' component={Home} />
          <Route exact path='/search-console/' component={SearchConsole} />
          <Route exact path='/keyword-research/' component={KeywordResearch} />
        </PrivateRoute>
        <GuestRoute>
          <Route path='/login/' component={Login} />
          <Route path='/signup/' component={Signup} />
          <Route path='/reset-password/' component={ResetPassword} />
          <Route path='/activate/:uid/:token/' component={Activate} />

        </GuestRoute>
      </Layout>
    </>
  );
}

export default App;


