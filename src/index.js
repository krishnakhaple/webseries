import react from 'react'
import ReactDOM from 'react-dom'
import Card from './Card';
import Sdata from './Sdata';
import App from './App';

import './index.css';


//import App,{str2,me ,you} from './App';

//import * as krishna from './App';



//FAT ARROW FUNCTION

// function add(a,b)
// {
//     return a+b;
// }

// const add=(a,b)=>a+b;










// function ncard(val)
// {
//    return (<Card 
//    key={val.id}
//    imgsrc={val.imgsrc}
//    title={val.title}
//    sname={val.sname}
//    link={val.link}
//    />)
// }




ReactDOM.render
(
  
<>

<div className="netflix"><span className="fonts">available only on netflix</span></div>
{/* {Sdata.map(ncard)} */}

<App/>
{/* 


<Card  
imgsrc={Sdata[1].imgsrc}
title={Sdata[1].title}
sname={Sdata[1].sname}
link={Sdata[1].link}
/>


<Card  
imgsrc={Sdata[2].imgsrc}
title={Sdata[2].title}
sname={Sdata[2].sname}
link={Sdata[2].link}
/>

<Card  
imgsrc={Sdata[3].imgsrc}
title={Sdata[3].title}
sname={Sdata[3].sname}
link={Sdata[3].link}
/>

<Card  
imgsrc={Sdata[4].imgsrc}
title={Sdata[4].title}
sname={Sdata[4].sname}
link={Sdata[4].link}
/>

<Card  
imgsrc={Sdata[5].imgsrc}
title={Sdata[5].title}
sname={Sdata[5].sname}
link={Sdata[5].link}
/>


<Card  
imgsrc={Sdata[6].imgsrc}
title={Sdata[6].title}
sname={Sdata[6].sname}
link={Sdata[6].link}
/> */
}

</>
,
document.getElementById('root')
);