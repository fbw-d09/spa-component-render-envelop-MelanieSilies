import './Stamp.scss';
import stampImage from '../../images/stamp.jpg'; 

const Stamp = () => {
  return (
    <img className='Stampimage' src={stampImage} alt="Stamp" />
  );
};

export default Stamp;
