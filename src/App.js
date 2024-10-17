  import './App.css';
import Navigation from "./custumer/components/Navigation/Navigation";
import HomePage from "./custumer/pages/HomePage/HomePage";
import Footer from "./custumer/components/Footer/Footer";
  import Product from "./custumer/components/Product/Product";

function App() {
    return (
        <div className="">
            <Navigation/>
            <div>
                {/* <HomePage/> */}
                <Product/>
            </div>
            <div>
            <Footer/>
            </div>
        </div>
    );
}

export default App;
