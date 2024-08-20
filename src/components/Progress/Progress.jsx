import { useContext } from 'react';
import { MemberContext } from '../../pages/MemberPage';
import './styles.css';
import giftImg from '../../assets/gift.png';
export const Progress = () => {
  const { user } = useContext(MemberContext);
  const { totalCuts, cutsNeeded, cutsRemaining } = user.loyaltyCard;

  const percentage = totalCuts * 10;
  return (
    <div className='block progress-bar'>
      <div className='progress-container'>
        <div className='progress-remaining'>
          <bold>{cutsRemaining}</bold> remaining cuts
        </div>

        <div className='row-progress'>
          <div className='progress-background'>
            <div
              className='progress-content'
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className='progress-indicator'>
            {totalCuts} of {cutsNeeded}
          </div>
        </div>
      </div>
      <div className='gift-image'>
        <img src={giftImg} />
      </div>
    </div>
  );
};
