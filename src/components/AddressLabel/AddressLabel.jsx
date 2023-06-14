import './AddressLabel.scss';

const AddressLabel = ({ person }) => {
    return (
      <div className='AddressLabel'>
        <div>
            {person.name}
        </div>
        <div>
            {person.address}
        </div>
        <div>
        {person.plz} {person.city}
        </div>
        <div>
            {person.state}
        </div>
      </div>
    );
  };
  
  export default AddressLabel;
  