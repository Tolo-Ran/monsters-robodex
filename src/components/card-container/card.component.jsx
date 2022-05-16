import './card.styles.css';

const Card = ({monster}) => {
    const {name, id, email} = monster;
   return (
    <div className="card-container" key={id}>
    <img alt={`Monster ${name}`}
    src={`https://robohash.org/${id}?set=set1&size=180x180`}>
    </img>

    <h1>{name}</h1>
    <p>{email}</p>
    </div>
   );
        
    }

export default Card;