import { useContext } from 'react';
import './styles.css';
import { MemberContext } from '../../pages/MemberPage';
import check from '../../assets/check.png';
import { Gift } from '@phosphor-icons/react';
export const Card = () => {
  const { user } = useContext(MemberContext);
  const { totalCuts, cutsNeeded } = user.loyaltyCard;
  if (totalCuts === cutsNeeded) {
    alert('Congratulations! Your next cut will be free');
  }
  return (
    <div className='block gray-squares'>
      <div className='squares-space'>
        <div className='row'>
          <div className='col'>
            <div className='title'>LOYALTY CARD</div>
            <div className='subtitle'>
              The cut number {cutsNeeded} will be free!
            </div>
          </div>
          <div className='tag'>ID: {user.id}</div>
        </div>
        <div className='squares'>
          {Array.from({ length: cutsNeeded }).map((_, index) => {
            let render = <></>;

            if (index === cutsNeeded - 1) {
              render = <Gift size={40} color={'#756C71'} />;
            }
            if (index < totalCuts) {
              render = <img src={check}></img>;
            }
            return (
              <div key={index} className='square'>
                {render}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
