import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import Netflix from './Netflix';
import Amaz from './Amaz';

let Fav="netflix"
Fav="amazon"
Fav="netflix"

// const Myfav=()=>
// {
// return(Fav==="amazon")?<Amaz/>: <Netflix/>
// }





const App=()=>Sdata.map((val)=>
{
 return (
    <><Card 
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
    />
    </>
 )
}
);

// const App=()=>
// (
// <>
// <Myfav/>
// </>
// )

export default App;