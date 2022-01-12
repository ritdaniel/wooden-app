import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import fondo from './fondo.jpg';
import { NavBar } from './components/navbar';
import './App.css';
import './Style.css';
import './components/promesa';
function App() {
    return ( <div className = "App" style={{backgroundImage:`url(${fondo})`, backgroundSize: "cover",}}>
        < header >
        <NavBar/>
        <img src = { logo }
        className = "App-logo"
        alt = "logo"/>
        <p>
        Edit < code > src / App.js </code> es prueba. </p >
        <a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React </a> </header > 
        </div>
    );
}
export default App;