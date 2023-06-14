import './Envelope.scss';
import AddressLabel from '../AddressLabel/AddressLabel';
import Stamp from '../Stamp/Stamp';


const Envelope = ({ toPerson, fromPerson }) => {
  return (
    <div className="envelope">
      <div className="header">
        <AddressLabel person={toPerson} />
        <div className="stamp">
          <Stamp />
        </div>
      </div>
      <div className="content">
        <AddressLabel person={fromPerson} />
      </div>
    </div>
  );
};

export default Envelope;