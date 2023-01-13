import Link from "next/link";

import {useState} from 'react';

import Ccounter from "./components/Counter";

export default function CounterWidget(){

   const[ state, SetState, ]=useState(false);

   const odebrat=()=>{
       SetState(!state);

   }

    return(

 <div>
     <button onClick={odebrat}>Odebrat Widget</button>

     {state ? "":<Ccounter/>}

 </div>


    )




}