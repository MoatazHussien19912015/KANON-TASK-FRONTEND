import { Switch, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import SearchCountry from './components/SearchCountry';
import ViewCountry from './components/ViewCountry';
import SearchCountries from './components/SearchCountries';
import AllCountries from './components/AllCountries';
import SignUp from './components/user/SignUp';
import SignIn from './components/user/SignIn';
import Profile from './components/user/Profile';

function App(props) {
  
  return (
    <div>
      <Layout>
      <Switch>
        <Route exact path="/search-country" component={SearchCountry} />  // search for a single country
        <Route exact path="/search-countries" component={SearchCountries} />  // search for multiple countries
        <Route exact path="/country/:name" component={ViewCountry} /> // view single country without the search bar
        <Route exact path="/all-countries" component={AllCountries} /> // view all the countries with the ability to filter them
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
