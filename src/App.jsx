import React, { useState } from "react";

const App=()=>{
   const[name,setname]=useState("")
   const[data,setdata]=useState([])

   
   const input=(e)=>{
    setname(e.target.value)
   }
   const clk=()=>{
      if(!name){
alert("Please add some data ☺☺")
      }
      else{
         setdata(name)
         setdata([...data,name])
         setname("")
      }
   
     

   }
   // delete itm
   const removeAll=()=>{
      setdata([])
   }
   // dlt elmnt
   const removeel=(indx)=>{
   
   
      const newdata= data.filter((val,ind)=>{
        return(
           ind !== indx
        )
         }
      );
     
      setdata(newdata)
   
   }


 

   return( <>
   <div className="maindiv">
   <div className="centerdiv">
      <br/>
      <h1>ToDo List ✔✔</h1>
      <br/>
      <input type="text" placeholder="Add a Items" onChange={input} value={name} />
      <button className="btn" onClick={clk}>+</button>
      <ol>
        {data.map( (itemval,indx) =>{
           return (<div  key={indx} >
             <div className="logo">
              <li>{itemval} 
              <i class="fa fa-remove"  onClick={()=>removeel(indx)}></i>
              </li>
              </div>
              </div> )
        } )}
      </ol>
     
      <button onClick={removeAll}>Remove All</button>
   
      
   </div>
   </div>



    </>
   )}
export default App;