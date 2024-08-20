import { useContext } from 'react';
import './styles.css';
import { MemberContext } from '../../pages/MemberPage';

export const User = () => {
  const { user } = useContext(MemberContext);
  console.log(user);
  return (
    <div className='block user-info'>
      <div>
        <img src={user.image} className='user-photo' />
      </div>
      <div>
        <div className='user-name'>{user.name}</div>
        <div className='user-since'>Client since {user.clientSince}</div>
      </div>
    </div>
  );
};
