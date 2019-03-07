import React from 'react';
import WorkProfiles from "./Profiles"
// import './Profiles.js';

const App = () => {
   const styles = {
     display: "grid",
     gridGap: "30px",
     gridTemplateColumns: "repeat(5, 1fr)"
     
     
   }
  return (
    // component here
    <div style={styles}>
    <WorkProfiles backgroundColor="moccasin" />
    <WorkProfiles backgroundColor="green" />
    <WorkProfiles backgroundColor="orange" />
    <WorkProfiles backgroundColor="yellow" />
    <WorkProfiles backgroundColor="red" />
    <WorkProfiles backgroundColor="blue" />
    <WorkProfiles backgroundColor="salmon" />
    <WorkProfiles backgroundColor="maroon" />
    <WorkProfiles backgroundColor="darkseagreen" />
    <WorkProfiles backgroundColor="hotpink" />
    </div>
  )
}

export default App;
