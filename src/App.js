// import logo from './logo.svg';
import './App.css';
// import Header from "./Header";
import Todos from "./Todos";
//import Todo from "./Todo"; // Ensure Todo is used somewhere if imported
import Footer from "./Footer";
import Second from "./secondmethodprops";
import Navbar from "./navbar";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './Home';
import Login from './login';
import Counter from './Counter'; 
import Services from './Services'; 
import React,{ useState } from 'react';
// import Toggle from './Toggle';
// import Form from './Form';
import About from './About';
function App() {
  const [mode,setMode]=useState('light');
  const router=createBrowserRouter([
    {
        path:"/Home",
        element:<Home/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
      path:"/Services",
      element:<Services/>
  },
    // {
    //   path:"/TextForm",
    //   element:<TextForm/>
    // }
    {
      path:"/Counter",
      element:<Counter/>
  },
  {
    // path:"/Form",
    // element:<Form/>
}

])
const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
  }
  else{
    setMode('light');
  }
}
  return (
    <>
      {/* Uncomment the line below to pass custom props to Header */}
      {/* <Header title="MyTodo" menu1="Home" menu2="About" menu3="Service" searchBar={true}/> */}

      {/* This will use defaultProps from Header */}
      {/* <Header /> */}
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <RouterProvider router={router}/>

      <Todos />
      
<Counter/>
      <Footer />
      {/* <Toggle/> */}

      <Second heading="this is the heading" />
      <About/>
    </>
  );
}

export default App;
