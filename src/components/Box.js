import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Box = ({ index, email }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div style={{backgroundColor: state.indexColor[index] ? state.indexColor[index] : state.defaultColor}} className="box">
      <h1>Box {index + 1}</h1>
      <p>{email}</p>
      <input type="text" onChange={(e) => dispatch({type: 'INPUT_COLOR', payload: {color: e.target.value, index: index}})} />
    </div>
  )
}

export default Box
