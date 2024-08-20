import { useContext, useState } from 'react';
import './styles.css';
import { MemberContext } from '../../pages/MemberPage';
import { ArrowElbowDownLeft } from '@phosphor-icons/react';
export const Header = () => {
  const { handleSearchMember } = useContext(MemberContext);
  const [fieldValue, setFieldValue] = useState('');
  return (
    <header className='header'>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Card ID..'
          value={fieldValue}
          onChange={(e) => {
            setFieldValue(e.target.value);
          }}
        />
        <button
          type='submit'
          disabled={!fieldValue}
          onClick={() => {
            handleSearchMember(fieldValue);
            setFieldValue('');
          }}
        >
          <ArrowElbowDownLeft size={20} weight='fill' />
        </button>
      </div>
    </header>
  );
};
// "124-537-835-230"
