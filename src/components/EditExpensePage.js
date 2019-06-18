import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <h2>Edit {props.match.params.id}</h2>
    );
};

export default EditExpensePage;