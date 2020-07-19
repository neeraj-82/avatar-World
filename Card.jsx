import React from 'react';

const Card=(props)=>
{
  return (
    <>
        <div className="card dib ma4 pa3 shadow-4 grow" >
           <h4 className='tc  pa2'>{props.card_number}-Card</h4>
           <a href={props.link}><img className="pa2 shadow-2"src={`https://joeschmoe.io/api/v1/${props.name}`} alt="error"/></a>
            <h3 className="tc pa3 ">{props.name}</h3>
            <h4 className="tc pa2">{props.work}</h4>
        </div>
    </>
  )
}

export default Card;