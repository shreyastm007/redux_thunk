import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userAction } from './actions/userActions';
import Users from './components/Users';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;

  useEffect(() => {
    dispatch(userAction);
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Redux Thunk</h1>
      {loading ? (<h1>loading....</h1>)
        : error ? (<h1>{error}</h1>)
          : (<Users users={users} />
          )}
    </div>
  );
}

export default App;
