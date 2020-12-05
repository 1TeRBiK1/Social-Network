import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Profile from './components/Profile/Profile';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import News from './components/News/News';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile' component={Profile}/>
          <Route path='/News' component={News}/>
          <Route path='/Dialogs' component={Dialogs}/>
          <Route path='/Friends' component={Friends}/>
          <Route path='/Music' component={Music}/>
          <Route path='/Settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
