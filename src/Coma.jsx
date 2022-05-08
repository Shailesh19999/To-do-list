// import React from "react";
// import Comb  from "./Comb";
// const Coma=()=>{
//     return(<>
//  <Comb/>

//     </>)
// }
// export default Coma;



// import React, { useEffect, useState } from "react"
// import axios from "axios"
// const Coma=()=>{
//     const[num,setnum]=useState();
//     const[name,setname]=useState();
//     const[move,setmove]=useState();
//   useEffect( ()=>{
//      async function getdata(){
//          const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)

//          setname(res.data.name)
//          setmove(res.data.moves.length)
//      }
//      getdata();
//   } )
//     return(
//         <>
//         <h1>you choose <span style={{color:"red"}}> {num} </span> value</h1>
//         <h1>myname is <span style={{color:"red"}}> {name} </span> </h1>
//         <h1>i have <span style={{color:"red"}}> {move} </span> </h1>

//           <select value={num} onChange={ (event)=>{
//          setnum(event.target.value)
//           } }>

//               <option value="1"> 1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//           </select>
//         </>
//     )
// }
// export default Coma;
// done








