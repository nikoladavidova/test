import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {useState} from 'react';
const inter = Inter({ subsets: ['latin'] })
import Ccounter from "./components/Counter";
import products from './components/data';



function CounterWidget(){
    const[ state, SetState, ]=useState(false);
    const odebrat=()=>{
        SetState(!state);
    }

    return(
        <div><button onClick={odebrat}>Odebrat Widget</button>
            {state ? "":<Ccounter/>}
        </div>)
}

interface Interface {

    name:string,
    price: string,
    category: string,
    brand: string,
    description:string,

}
function CProducts({name,price,category,brand,description}:Interface) {

    return(
        <div>
           <h1> {name}</h1>
            <p>{brand}{category}</p>
            <p>{description}</p>
            <p>{price}</p>
        </div>

    )
}


export default function Home() {
  return (
     <div>
         <CounterWidget/>
         <h1>Moje produkty</h1>
         {products.map(({name,price,category,brand,description})=>
             <CProducts name={name} price={price}category={category}
                        brand={brand}description={description}/>)}

     </div>
  )
}
