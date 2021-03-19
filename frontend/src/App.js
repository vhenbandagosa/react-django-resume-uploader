import './App.css';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <div className="container">
      <h4 className='display-4 text-center mb-4'>
        <i className='fa fa-file' /> Resume Uploader
      </h4>
      <HomePage/>
    </div>
  );
}

export default App;
