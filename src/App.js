import './App.css';
import Business from './components/Business';
import Footer from './components/Footer';
import Web from './components/Web'
import Cloud from './components/Cloud'

function App() {
  return (
    <div className="App">
      <Cloud />
      <Web />
      <Business />
      <Footer />
    </div>
  );
}

export default App;
