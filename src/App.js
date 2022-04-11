import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import AddLog from './Pages/AddLog/AddLog';
import AddMed from './Pages/AddMed/AddMed';
import AddPet from './Pages/AddPetPage/AddPet';
import LogsPage from './Pages/LogsPage/LogsPage';
import MedsPage from './Pages/MedsPage/MedsPage';
import NotFound from './Pages/NotFound';
import PetsPage from './Pages/PetsPage/PetsPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path={'/'} exact>
          <PetsPage />
        </Route>
        <Route path={'/medication'}>
          <MedsPage />
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
  );
}

export default App;
