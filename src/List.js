import React from 'react';

const List = ({people}) => {
  return (
    <>
     {people.map((person)=>{
       const {id,name,age,image}=person
       return <article key = {id} className='person'>

        <img src={image} alt={name}></img>
        <div>
        <h2>{name}</h2>
        {/* <h2>{person.name}</h2> */}
        <p>{age} y/o</p>
        </div>
       </article>
       

     })}
    </>
  );
};

export default List;
