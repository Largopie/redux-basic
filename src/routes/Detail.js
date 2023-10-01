import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({ toDos }) {
  const { id } = useParams();
  const {text} = toDos.find((toDo) => toDo.id === parseInt(id));
  return (
    <>
      <h1>{text}</h1>
      <h5>Created at: {id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
