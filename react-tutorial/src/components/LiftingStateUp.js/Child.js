import React, { useState } from 'react'

//Lifting state up or pass data from child to parent

const Child = (props) => {
    const[name, setName] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        props.getData(name) 
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={(e)=>{ setName(e.target.value)}}></input>
        <button>Submit</button>
    </form>
    </>
  )
}

export default Child



// Here's a common scenario where lifting state up is beneficial:

// Shared State:

// Suppose you have two or more components that need access to the same piece of state or data.
// Instead of managing the state separately in each component, you can lift the state up to a common ancestor.
// Parent-Child Communication:

// If a child component needs to modify the state, it can do so by calling a function passed down from the parent as a prop.
// This way, the child component communicates changes to the state, and the parent component is responsible for managing the state.
