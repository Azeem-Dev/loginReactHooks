
import './App.css';
import { Login } from './Components/Login';
import Logout from './Components/Logout';
import { selectUser } from './feature/userSlice';
import { useSelector } from 'react-redux';

const HandleLogin=()=>{
  const user=useSelector(selectUser)

  if(user===null){
    return <Login/>
  }
  return <Logout/>
}
function App() {
  
  return (
    <div className="App">
      {
        HandleLogin()
      }
    </div>
  );
}

export default App;
