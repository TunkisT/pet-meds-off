import { useState } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AddLog from './Pages/AddLog/AddLog';
import AddMed from './Pages/AddMed/AddMed';
import AddPet from './Pages/AddPetPage/AddPet';
import Login from './Pages/Login';
import LogsPage from './Pages/LogsPage/LogsPage';
import MedsPage from './Pages/MedsPage/MedsPage';
import NotFound from './Pages/NotFound';
import PetsPage from './Pages/PetsPage/PetsPage';
import AuthContext from './store/authContext';

function App() {
  const [isLogged, setIslogged] = useState(false);

  function logout() {
    setIslogged(false);
  }
  function login() {
    setIslogged(true);
  }

  const currentContext = {
    isLogged,
    logout,
    login,
  };

  return (
    <AuthContext.Provider value={currentContext}>
      <div className='App'>
        <Header />
        <Switch>
          <Route path={'/'} exact>
            <PetsPage />
          </Route>
          <Route path={'/medication'}>
            <MedsPage />
          </Route>
          <Route path={'/login'}>
            <Login />
          </Route>
          <Route path={'/register'}>
            <Login />
          </Route>
          <Route path={'/add-medication'}>
            <AddMed />
          </Route>
          <Route path={'/addpet'}>
            <AddPet />
          </Route>
          <Route path={'/logs/:petId'}>
            <LogsPage />
          </Route>
          <Route path={'/add-log'}>
            <AddLog />
          </Route>
          <Route path={'*'}>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
