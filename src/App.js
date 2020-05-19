import React, { useEffect, useState } from 'react';
import './App.css';
import Style from 'style-it';
import Card from './components/Card';
import "./Box.scss";

const  App = () => {
const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() =>{
      setIsReady(true);
    },500)

    return () => {
      clearTimeout(timeout);
   }

  }, [isReady])

 
  

  return (
    <div className="App">
     {!isReady &&  <Style>
        { 
          `.box:before {
            opacity:1;
          } `
        }    
        </Style> 
      }
        <div className="box" >
        <Card isReady={isReady}/>
      </div>
      
 
    </div>
  );
}

export default App;
