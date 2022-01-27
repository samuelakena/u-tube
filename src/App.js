import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import RecomendedVideos from './RecomendedVideos';


function App() {
  return (
    <div className="app">
      <Header />

      <div className='app__page'>
        <Sidebar />
        <RecomendedVideos />
      </div>
    </div>
  );
}

export default App;

