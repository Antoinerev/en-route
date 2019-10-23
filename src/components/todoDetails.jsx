import React from 'react';

const TodoDetails = ({match}) => {
  const id = match.params.id;
  return(
    <div>
      Les détails de la todo {id}
    </div>
  );
}
export default TodoDetails;
