import axios from 'axios';
import { Card } from '../components/Card/Card';
import { Header } from '../components/Header/Header';
import { History } from '../components/History/History';
import { Progress } from '../components/Progress/Progress';
import { User } from '../components/User/User';
import './styles.css';
import { useState, createContext } from 'react';
export const MemberContext = createContext();
export const MemberPage = () => {
  const [user, setUser] = useState();

  const handleSearchMember = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/clients?id=${id}`
      );
      const findUser = response.data?.[0];
      if (findUser) {
        setUser(response.data[0]);
      } else {
        alert('User not found');
      }
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };
  // "124-537-835-230"

  return (
    <MemberContext.Provider value={{ user, setUser, handleSearchMember }}>
      <div className='container'>
        <Header />
        {user && (
          <main className='main-content'>
            <div className='free-space'></div>
            <User />
            <Card />
            <div className='free-space'></div>
            <History />
            <Progress />
          </main>
        )}
      </div>
    </MemberContext.Provider>
  );
};
