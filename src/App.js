import logo from './logo.svg';
import './App.css';
import Navigation from "./custumer/components/Navigation/Navigation";
import HomePage from "./custumer/pages/HomePage/HomePage";

function App() {
    return (
        <div className="">
            <Navigation/>
            <div>
            <HomePage/>
            </div>
        </div>
    );
}

export default App;
