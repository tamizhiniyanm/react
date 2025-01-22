import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

const App = () => {
   return(
    <Router>
      <Routes>
         <Route path="/" element ={<Home/>} />
         <Route path ="/About" element ={<About/>}/>
         <Route Path="*" element ={<NotFound/>}/>
      </Routes>
    </Router>
   )
}
export default App;