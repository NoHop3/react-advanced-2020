import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  // function removePerson(params) {
  //   setPeople(people.filter(person=> person.id!==params));
  // } 
  const removePerson = (id) => {
    let newPeople=people.filter((person)=>person.id!==id)
    setPeople(newPeople); 
  }
  return (
    <>
    {people.map((person) => {
      const {id, name} = person;
      return (
        <div className='item' key={id}>
          <h5>{name}</h5>
          <button className='btn' onClick={() => removePerson(id)}>remove person</button>
        </div>
      );
    })}
    <button className='btn' onClick={()=> setPeople([])}>delete all</button>
    </>
  );
};

export default UseStateArray;
