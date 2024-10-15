import './App.css';
import Navigation from "./custumer/components/Navigation/Navigation";
import HomePage from "./custumer/pages/HomePage/HomePage";
import Footer from "./custumer/components/Footer/Footer";

function App() {
    return (
        <div className="">
            <Navigation/>
            <div>
            <HomePage/>
            </div>
            <div>
            <Footer/>
            </div>
        </div>
    );
}

export default App;
