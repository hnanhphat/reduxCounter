const initalState = {
  count: 0,
  indexColor: [],
  defaultColor: 'lightcoral',
  isLogined: false,
  email: '',
}

const counterReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'INCREASE':
      state.count++;
      state.indexColor = new Array(state.count);
      break;
    case 'DECREASE':
      if(state.count > 0) state.count--;
      break;
    case 'DEFAULT_COLOR':
      state.defaultColor = payload;
      break;
    case 'INPUT_COLOR':
      state.indexColor[payload.index] = payload.color;
      break;
    case 'SIGNIN':
      state.isLogined = true;
      state.email = payload;
      break;
    case 'SIGNOUT':
      state.isLogined = false;
      state.email = '';
      break;
    default:
      break;
  }
  return { ...state }
}

export default counterReducer;
