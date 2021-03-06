import React from 'react';




const Photo = (props)=>(
      <div>
          <h2>{props.photo.title}</h2>
          <img src ={props.photo.url} alt ={props.photo.title} style={{resizeMode:"contain", maxWidth:"94%", resizeMethod:"scale", border:"10px groove" }}/>
       <p style={{maxWidth:"80%", margin:"10px auto 5px"}}>{props.photo.explanation}</p>
      </div>

)

export default Photo;
