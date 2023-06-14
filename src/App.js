import  Envelope  from './components/Envelope/Envelope';

function App() {

  const toPerson = {
    name: 'Max Mustermann',
    adress: 'Berliner Straße 123',
    city: 'Musterstadt',
    plz: '12345',
    state: 'Germany'
  };

  const fromPerson = {
    name: 'Maya Musterfrau',
    adress: 'Elm Street',
    city: 'Musterhausen',
    plz: '54321',
    state: 'Germany'
  }
  return (
    <div>
      <Envelope toPerson={toPerson} fromPerson= {fromPerson}/>
    </div>
  );
}

export default App;