import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting'; 
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App!</h1>
      <Greeting name="World" /> {/* Pass a different name prop */}
      <p>This app serves as my refresher to react. The button below calls Counter function on click and updates count.</p>
      <Counter /> {/* Use the Counter component */}
      <p>This app is mainly for me to learn and test things.</p>
    </div>
  );
}

export default App;
