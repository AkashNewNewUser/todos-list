import React from 'react';

// import Home from './Home';


export default function navbar(props) {
    //  const [xStyle,xupStyle]=useState({
    //          color:'black'
    
    //     })
    //   const [check1,updateCheck1]=useState({
    //     if(props.mode==='dark'){
    //       xupStyle({
    //         color:'white'
    //       })
    //     }
    //     else{
    //       xupStyle({
    //         color:'black'
    //       })
    //     }

      // })
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a href="/Home">Home</a>
        <a href="/login">login</a>
        <a href="/Services">Service</a>
        <a href="/Counter">Count</a>
        <a href="/Form">Form</a>
        <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">enable dark mode</label>
</div>
      </nav>
    </div>
  )
}
