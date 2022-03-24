import './App.css';
import LoadMealDb from './Components/LoadMealDb/LoadMealDb';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <LoadMealDb></LoadMealDb>
    </div>
  );
}

export default App;
