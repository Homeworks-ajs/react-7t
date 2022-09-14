import './App.css';
import Test from './components/test/Test';

function App() {
  return (
    <div className="container">
      <Test path={"/loading"} />
      <Test path={"/error"} />
      <Test path={"/data"} />
    </div>
  );
}

export default App;
