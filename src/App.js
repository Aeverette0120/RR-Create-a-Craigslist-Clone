// Import data


// Import components
import Gallery from './Gallery.jsx';
import Search from './search';
import Directory from './Directory';
import Sidebar from './Sidebar'
import './App.css';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
      <Search />
      <Directory/>
      <Sidebar />
        <Gallery />
        
      </div>
    </div>
  );
}

export default App;
