import { Route,Switch } from "react-router-dom";
import AllMeetUpPage from "./pages/AllMeetUps";
import NewMeetUpPage from "./pages/NewMeetUps";
import FavouritePage from "./pages/Favourites";
import Layout from "./components/layout/layout";

function App() {
  return (
  <Layout>


    
    <Switch>
    <Route path="/" exact>
      <AllMeetUpPage/>

    </Route>

    <Route path="/newmeetups">
      <NewMeetUpPage/>
    </Route>
    
    <Route path="/favourites">
      <FavouritePage/>
    </Route>
    </Switch>

  </Layout>
  )
}

export default App;
