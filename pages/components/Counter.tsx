import Link from "next/link";

import {useState} from 'react';

export default function(){
    const [counter,setCounter]=useState(0);


    const eventplus=()=>{

        setCounter(counter+ 1);
    }
    const eventminus=()=>{

        setCounter(counter -1);
    }
    return(
        <>

            {counter}

            <button onClick={eventplus}>Pridat</button>
            <button onClick={eventminus}>Odebrat</button>

        </>
    )
}
