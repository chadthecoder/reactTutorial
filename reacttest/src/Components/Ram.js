import './Comp.css';

function Ram() {

    const randNum = Math.floor(Math.random() * 826) + 1; //826 is num of chars in api
    const url = `https://rickandmortyapi.com/api/character/avatar/${randNum}.jpeg"`;

  return (
    <div className="Comp">
      <h1> {randNum} </h1>
      <br/>
      
    </div>
  );
}

export default Ram;