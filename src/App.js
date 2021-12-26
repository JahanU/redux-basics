import { useSelector } from 'react-redux';

import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';


function App() {

  const isAuthenticated = useSelector(state => state.authStore.isAuthenticated)

  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      {isAuthenticated && <Counter />}
    </>
  );
}

export default App;
