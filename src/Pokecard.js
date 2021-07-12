import './Pokecard.css';

const Pokecard = ({ id, name, type, experience }) => (
    <div className="Pokecard">
        <div className="Pokecard-name">{name}</div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`${name}`}/>
        <div className="Pokecard-details">
            <p>Type: {type}</p>
            <p>EXP: {experience}</p>
        </div>
    </div>
);

export default Pokecard;