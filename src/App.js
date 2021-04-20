import logo from './logo.svg'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './components/Box'

function App() {
  const count = useSelector((state) => state.count);
  const defaultColor = useSelector((state) => state.defaultColor);
  const isLogined = useSelector((state) => state.isLogined);
  const email = useSelector((state) => state.email);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <header id="header" className="header">
        <div className="header__left">
          <img src={logo} alt="Counter"/>
        </div>
        <div className="header__right">
          {!isLogined ?
            <form onSubmit={(e) => {
              e.preventDefault();
              dispatch({type: 'SIGNIN', payload: e.target.email.value});
            }}>
              <input type="email" name="email" id="email"/>
              <button type="submit">Sign In</button>
            </form>
          :
            <div className="info">
              {email ? <p>{email}</p> : ''}
              <button onClick={() => dispatch({type: 'SIGNOUT'})}>Sign Out</button>
            </div>
          }
        </div>
      </header>
      <div className="controller">
        <div className="controller__group">
          <button onClick={() => dispatch({type: 'INCREASE'})} className="blue">Increase</button>
          <button onClick={() => dispatch({type: 'DECREASE'})} className="red">Decrease</button>
          <input type="text" onChange={(e) => dispatch({ type: "DEFAULT_COLOR", payload: e.target.value })} />
        </div>
        <h1 className="controller__num" style={{color: defaultColor}}>{count}</h1>
      </div>
      {Array.from(Array(count)).map((item, index) =>
        <Box key={index} index={index} email={email}></Box>
      )}
    </div>
  );
}

export default App;
