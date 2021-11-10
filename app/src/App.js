import { BrowserRouter } from 'react-router';
import './App.css';

function MainApp() {
  return (
    <div className="App">
     
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
        <MainApp/>
    </BrowserRouter>
  )
}

export default App;
