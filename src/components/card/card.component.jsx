const Card = ({ monster : {name, id, email } }) => {
  return (
    <div key={id} className="card">
      <img
        src={`https://robohash.org/${id}?set=set2&size=400x400`}
        alt={`${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;