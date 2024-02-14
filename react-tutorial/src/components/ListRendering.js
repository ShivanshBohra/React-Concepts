import React from "react";
import "../App.css";
//rendering of list and key in react?
//How map() works in React?

function ListRendering() {
  const IPL = ["CSK", "MI", "RCB","CSK"];
  const result = IPL.map((ipl, index) => <h1 key={index}>{ipl} index is {index}</h1>);

  return <div className="app">{result}</div>;
}

export default ListRendering;


// Example of using existing unique elements as keys:

// import React from 'react';

// function ListRendering() {
//   const teams = [
//     { id: 1, name: 'CSK', captain: 'MS Dhoni' },
//     { id: 2, name: 'MI', captain: 'Rohit Sharma' },
//     { id: 3, name: 'RCB', captain: 'Virat Kohli' },
//   ];

//   return (
//     <div className="app">
//       <h1>Indian Premier League (IPL) Teams</h1>
//       <ul>
//         {teams.map((team) => (
//           <li key={team.id}>
//             <strong>{team.name}</strong> - Captain: {team.captain}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListRendering;


// The map() method takes a callback function as an argument and applies it to each element of the array, returning a new array with the results.
//Keys help React identify changes, additions, or removals in arrays by providing 
//stable identities to elements inside the array.