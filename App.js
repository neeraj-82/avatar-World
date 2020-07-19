import React from 'react';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import 'tachyons';
import {array} from './Array';


const App=()=>{

   const new_Array=array.map((det,index)=>{
        return(
            <Card
                id={array[index].id}
                link={array[index].link}
                card_number={array[index].card_number}
                name={array[index].name}
                work={array[index].work}
            />
        )
   })
    return(
        <>
            <Header/>
            <section className="pa4">
               {new_Array}
           </section>
           <Footer/>
        </>
       
    )
}
export default App;