import './App.css';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeNew from '../components/BadgeNew';


function App() {
  return (
    <div className="App">
      <div>
       <Navbar/>
      </div>
      <div className="create-badge">
        <Badge />
        <BadgeNew />
      </div>
    </div>
  );
} 

export default App;
