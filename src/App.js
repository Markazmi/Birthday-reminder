import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  // deta is the file with all users
  const [people,setPeople]=useState(data)
  return (<main>
    <section className='container'>
    <h3>{people.length} birthdays today</h3>
    <List people={people}/>
    {/* empty array once we click clear all */}
    <button onClick={()=>setPeople([])}>Clear All</button>
    </section>
  </main>
  )
}

export default App;