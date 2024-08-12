import Main from "./Components/Main";
import Home from "./Components/Home";
import About from "./Components/About";
import Review from "./Components/Review";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import {Routes , Route} from 'react-router-dom';
import UpdateMenu from "./Components/UpdateMenu";
import AddNewItems from "./Components/AddNewItems";



function App(){
  return(
    <>
      <Main/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/add" element={<AddNewItems/>}/>
      <Route path="/update-menu/:id" element={<UpdateMenu/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/review" element={<Review/>}/>
     </Routes>

    
   
    
     <Footer/>
    </>
  )
}

export default App;