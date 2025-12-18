import './App.css';
import { HeaderComponent } from './components/Header/HeaderComponent';
import MenuComponent from './components/Menu/MenuComponent';
import Navigation from './routes/Navigation';

function App() {
  return (
    <div>
      <HeaderComponent />
      <MenuComponent />
      <div className="App-main">
        <Navigation />
      </div>
    </div>
  );
}

export default App;
