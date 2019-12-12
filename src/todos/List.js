import React from 'react';
//     props go inside ({})
const List = ({ items }) => (
  <div>
    <h1>List</h1>
    <ul>
      { items.map( item => <li key={item.id}>{item.todoValue}</li> )}
    </ul>
  </div>
)
export default List;
