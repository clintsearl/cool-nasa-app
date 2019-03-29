import React from 'react';



const Photo = (props)=>(
      <div>
          <h2>{props.photo.title}</h2>
          <img src ={props.photo.url} alt ={props.photo.title}/>
       <p>{props.photo.explanation}</p>
      </div>

)

export default Photo;
