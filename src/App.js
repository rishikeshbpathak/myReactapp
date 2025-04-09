import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Sidebar from './Layout/Sidebar';
import Slider from './Layout/Slider';
import Latest_Releases from './Layout/Latest_Releases';

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Slider />
      <div className='body_container'>
      <Latest_Releases />
      <Footer />
      </div>

    </div>
  );
}

export default App;
