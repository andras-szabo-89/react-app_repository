import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import { Popover, Button } from 'antd';
import { DatePicker } from 'antd';
import { Image } from 'antd';

function Beers() {
  const [init, setInit] = useState(0);
  const [beers, setBeers] = useState([]);
  const [index, setIndex] = useState(0);
  const [description, setDescription] = useState([]);
  const [changeDescription, setChangeDescription] = useState(0);
  const [popOverVisible, setPopoverVisible] = useState(false);


  const nextBeer = () => setIndex(prevValue => prevValue + 1);
  const previousBeer = () => setIndex(prevValue => prevValue - 1);
  const setADescription = () => {
    let descriptionArray = description;
    descriptionArray[index] = !descriptionArray[index];
    // setDescription(description => description); // erre pedig nincs is szükség
    setChangeDescription(prevValue => prevValue + 1); // ez valami megmagyarazáhatatlan ok miatt kell, mert csak így tud újra renderelni
  };

  const makePopoverVisible = () => setPopoverVisible(() => true);
  const hidePopover = () => setPopoverVisible(() => false);


  const firstValue = index === 0;
  const lastValue = (index + 1) === beers.length;


  useEffect( () => {
    if(init === 0) {
      fetch("https://api.punkapi.com/v2/beers?page=10&per_page=6").then( (response) => {
      if(response.ok) {
        return response.json();
      }
      }).then((data) => {
        setBeers(data);
      }).then(() => {
        let descriptionArray = [];
        for(let i = 0; i < beers.length; i++) {
          descriptionArray.push(false);
        }
        setDescription(descriptionArray);
      })
      .then(() => setInit(() => 1))
    }
  }, [beers, description]);

  console.log(description);

  // if(init !== 0) {
  //   console.log(beers[0]);
  //   return (
  //     <div>
  //       <p>{ beers[index].id }</p>
  //       <p>{ beers[index].name }</p>
  //       <p>{ beers[index].description }</p>
  //       <p>{ beers[index].image_url }</p>
  //       <button onClick = { nextBeer }>Next</button>
  //     </div>
  //   );
  // }

  if(init !== 0) {
    console.log(beers[0]);
    if(description[index] !== true) {
      return (
        <div>
          <Image
            height={200}
            src={beers[index].image_url}
          />
          <button onClick = { previousBeer } disabled = { firstValue }>Previous</button>
          <button onClick = { setADescription }>Image/description</button>
          <button onClick = { nextBeer } disabled = { lastValue }>Next</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>{ beers[index].name }</p>
          <p>{ beers[index].description }</p>
          <button onClick = { previousBeer } disabled = { firstValue }>Previous</button>
          <button onClick = { setADescription }>Image/description</button>
          <button onClick = { nextBeer } disabled = { lastValue }>Next</button>
        </div>
      );
    }
  }

  // if(init !== 0 && description[index] !== true) {
  //   return (
  //     <div>
  //       <Image
  //         height={200}
  //         src={beers[index].image_url}
  //       />
  //       <button onClick = { previousBeer } disabled = { firstValue }>Previous</button>
  //       <button onClick = { setADescription }>Image/description</button>
  //       <button onClick = { nextBeer } disabled = { lastValue }>Next</button>
  //     </div>
  //   );
  // }
  // if(init !== 0 && description[index] === true) {
  //   return (
  //     <div>
  //       <p>{ beers[index].name }</p>
  //       <p>{ beers[index].description }</p>
  //       <button onClick = { previousBeer } disabled = { firstValue }>Previous</button>
  //       <button onClick = { setADescription }>Image/description</button>
  //       <button onClick = { nextBeer } disabled = { lastValue }>Next</button>
  //     </div>
  //   );
  // }

  return (
    <p>Loading</p>
    // <p>{beers[0] && beers[0].id}</p>
  );
}

ReactDOM.render(
  <Beers />,
  document.getElementById('root')
);


function makeImage() {
  return (
    <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  );
}



// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { DatePicker } from 'antd';
// import { Popover, Button } from 'antd';
// import 'antd/dist/antd.css';

// class App extends React.Component {
//   state = {
//     visible: false,
//   };

//   hide = () => {
//     this.setState({
//       visible: false,
//     });
//   };

//   handleVisibleChange = visible => {
//     this.setState({ visible });
//   };

//   render() {
//     return (
//       <Popover
//         content={<a onClick={this.hide}>Close</a>}
//         title="Title"
//         trigger="click"
//         visible={this.state.visible}
//         onVisibleChange={this.handleVisibleChange}
//       >
//         <Button type="primary">Click me</Button>
//       </Popover>
//     );
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// // import React, { useEffect, useState } from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// // import serpent from './serpent.png';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';
// // import { Popover, Button, Pagination, Carousel, Modal } from 'antd';
// // import 'antd/dist/antd.css';
// // import Slider from "react-slick";



// // export default function Beer() {
// //   const [init, setInit] = useState(0);
// //   const [beers, setBeers] = useState([]);
// //   const [visible, setVisible] = useState(false);
// //   const [beerIndex, setBeerIndex] = useState();
  
  

// //  const settings = { 
// //   className: "center",
// //       centerMode: true,
// //       infinite: true,
// //       centerPadding: "60px",
// //       slidesToShow: 3,
// //       speed: 500,
// //       rows: 2,
// //       slidesPerRow: 2,
// //       dots: true,
// //       infinite: true,
// //     }

// //     const style = {
// //       'border-radius': '50px',

// // 'box-shadow':  ['20px 20px 60px #c76464',
// //              '-20px -20px 60px #ff8888'],
// //       padding: '10px',
// //        width: '200px',
// //       height: '300px',
// //       display:'flex',
// // 'align-items':'center',
// // 'justify-content':'center',
// // margin: '25px',
// //     };   

// //   function onChange(a, b, c) {
// //     console.log(a, b, c);
// //   }
  
// //   useEffect( () => {
// //     if(init === 0) {
// //       fetch("https://api.punkapi.com/v2/beers?page=10&per_page=8").then( (response) => {
// //       if(response.ok) {
// //         return response.json();
// //       }
// //       }).then((data) => {
// //         setBeers(data);
// //       }).then(() => setInit(() => 1))
// //     }
// //   }, [beers]);

// // if(init !== 0) {
// //   return(
// //     <>
// //     <table>
// //       <tr>
// //         <td>
// //         <img src={serpent} style={{opacity: 0.5, width: '40%'}} />
// //         </td>
// //         <td>
// //         <h3>Green Serpent's Brewery</h3>
// //           </td>
// //       </tr>
// //     </table>
    
    
// //     <Carousel afterChange={onChange} {...settings}>
          
// //             {beers.map((beer, index) => {
// //               return(
// //                 <span>
// //                   <div style={style} >
// //                 <img onClick={() => {setBeerIndex(index); setVisible(true);}}  key={index} style={{ width: '50%', display: 'flex', padding: '10px'}} src={ beer.image_url } />
// //                 </div>
// //                 </span>
                
               
// //               )
// //             })}
             
// //              <Modal
// //         title={ beers[beerIndex] && beers[beerIndex].name }
// //         centered
// //         visible={visible}
// //         onOk={() => setVisible(false)}
// //         onCancel={() => setVisible(false)}
// //         width={1000}
// //       >
// //         <p>Beer ID: { beers[beerIndex] && beers[beerIndex].id }</p>
// //         <p>{ beers[beerIndex] && beers[beerIndex].description }</p>
// //       </Modal>
// //             </Carousel>
          
// //         </>
// //       )
// //     }

// //   return (
// //     <p>Fetching beers...</p>
// //   );
// // }


// // ReactDOM.render(

   
 
// //     <Beer />,
// //   document.getElementById("root"),
// // );


// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();