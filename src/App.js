import './app.scss';
import Banner from './components/banner/Banner';
import Rows from './components/Rows/Rows';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rows/>      
    </div>
  );
}

export default App;
