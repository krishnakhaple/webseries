import Heading from './Heading';
import Images from './Images';
import './index.css';



function Card(props)
{
 
  return(
    <>
    
    <div className="cards" >
    <div className='card'>
    {/* <img src={props.imgsrc}   alt="mypic"/> */}
    <Images  imgsrc={props.imgsrc}/>
    <div className="card__info">
      <span className="card__category">{props.title} </span>

      {/* <h3 className="card title">{props.sname}</h3> */}
       <Heading sname={props.sname}/>
      <a href={props.link} target="_blank">
        <button className="Button">watchnow</button>
      </a>
    </div>
  </div>
</div> 
</>
  );
}

export default Card;