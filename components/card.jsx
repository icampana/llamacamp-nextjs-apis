
export default function Card(props) {

  const userPicture = props.img ?? 'https://via.placeholder.com/150x200.png?text=No+Image';

  return (
    <div style={cardStyle}>
      <div style={{float: 'right'}}>
        <img src={userPicture} width={150} />
      </div>
      <div>
         <h5>{props.name}</h5>
         {props.birthday}
      </div>

      <ul>
        {props.occupation.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  );
}

const cardStyle ={
  padding: '10px',
  border: '2px dotted black',
  borderRadius: '10px',
  margin: '10px auto',
  width: '400px',
  minHeight: '250px'
}