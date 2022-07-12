import React,{ useState } from 'react';
import './App.css';
import NavBar from './nav/NavBar';
import Shop from './pages/shop/Shop';
import Main from './pages/Main';

function App(props) {
  const [content, setContent] = useState(<Main/>)
  
  function setPage(page){
    // if (page === "Shop")
    //   setContent(<Shop title="Shop Entry Creator"/>)  
    // else 
    //   setContent(<Main title="Main Page"/>)
    switch(page){
      case "Shop":
          setContent(<Shop/>)
          break
      case "Home":
          setContent(<Main/>)
          break
      default: 
          setContent(<Main/>)
          break
    }
  }

  return (
    <div>
      <NavBar setPage={setPage}/>
      {content}
    </div>
  );
}

export default App;
