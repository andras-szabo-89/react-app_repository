import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


function GoldenAcorn() {
  const [acorn, setAcorn] = useState(0);

  const eatOne = () => setAcorn(prevValue => prevValue - 1);
  const buyOne = () => setAcorn(prevValue => prevValue + 1);

  const firstValue = acorn === 0;

  const onKeyPressed = (e) => {
    if(e.keyCode === 38) {
      buyOne();
    }
    if(e.keyCode === 40) {
      if(acorn !== 0) {
        eatOne();
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", onKeyPressed);
    return () => {
      window.removeEventListener("keydown", onKeyPressed);
    }
  });

  // if(acorn < 10) {
  //   return (
  //     <div>
  //       <span>Golder Acorn application with states</span>
  //       <button onClick = { buyOne }>Buy one</button>
  //       <span>{ acorn }</span>
  //       <button onClick = { eatOne } disabled = { firstValue }>Eat One</button>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h1>You win!</h1>
  //     </div>
  //   );
  // }

  return (
    <div>
      <span>Golder Acorn application with states</span>
      <button onClick = { buyOne }>Buy one</button>
      <span>{ acorn }</span>
      <button onClick = { eatOne } disabled = { firstValue }>Eat One</button>
    </div>
  );
}

function Welcome(props) {
  return (
    <div>
      <a href="http://localhost:3000/">Home</a>
      <a href="http://localhost:3000/goldenacorn">Golden Acorn</a>
      <h1>Golden Acorn with state</h1>
    </div>
  );
}

const element = <Welcome name="Krisztián" />;
// ReactDOM.render(
//   element,
//   document.getElementById('app')
// );

ReactDOM.render(
  <Router>
        <Route exact path='/' component={ Welcome } />
        <Route  path='/goldenacorn' component={ GoldenAcorn } />
  </Router>,
  document.getElementById('app')
);





// class Mosquito extends React.Component {
//   render() {
//     return <h1>Helló, {this.props.name}</h1>;
//   }
// }

// class Cockroach extends React.Component {
//   render() {
//     return <h1>Hellóóóó, {this.props.name}</h1>;
//   }
// }


// ReactDOM.render(
//   <Router>
//     <div>
//       <Route exact path="/">
//         <GoldenAcorn />
//       </Route>
//       <Route path="/news">
//         <GoldenAcorn />
//       </Route>
//     </div>
//   </Router>,
// );


// ReactDOM.render(
//   <Router>
//       <GoldenAcorn />,
//   </Router>,
//   document.getElementById('root')
// );





// ReactDOM.render(
//     <GoldenAcorn />,
//   document.getElementById('app')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
