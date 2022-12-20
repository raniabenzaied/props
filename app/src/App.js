import React from "react";
import FullName from "../src/Profile/FullName";
import Bio from "../src/Profile/Bio";
import Profession from "../src/Profile/Profession";
import HandleName from '../src/Profile/HandleName'



function App() {
  const handleEvent = (t) => {
    alert(`test ${t}`);
  };
  return (
    <>
   
    <body style={{margin:"150px 100px",fontSize:"1.2rem"}}>
    <h1>My Profile </h1>
      <FullName FirstName="Rania" LastName="Benzaied">
      <p>hi i'm a fullstack developer</p>
      </FullName>
      <br/>
      <Bio/>
      <div id="profession"><Profession/></div>
      <HandleName handleEvent={handleEvent}  FirstName="Rania"  >
      </HandleName>
    </body>
    </>
  );
}
export default App;
