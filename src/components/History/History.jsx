import { useContext } from 'react';
import './styles.css';
import { MemberContext } from '../../pages/MemberPage';
import { SealCheck } from '@phosphor-icons/react';

export const History = () => {
  const { user } = useContext(MemberContext);

  return (
    <div className='block history'>
      <div className='history-content'>
        <div className='history-title'>
          <span className='date'>HISTORY </span>
          <span className='date'>{user.appointmentHistory.length} cuts</span>
        </div>
        <div>
          {user.appointmentHistory.map((appointment) => {
            return (
              <div key={appointment.date} className='appointment'>
                <div className='date-and-time'>
                  <span className='date'>{appointment.date}</span>
                  <span className='time'>{appointment.time}</span>
                </div>
                <div className='check-background'>
                  <SealCheck size={24} color='#45B442' />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
