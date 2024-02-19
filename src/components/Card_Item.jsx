import Card from 'react-bootstrap/Card';

function Card_Item(props) {
  if(!props.isVisible){
    return <></>
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title || "Some random text"}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.Subtitle}</Card.Subtitle>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Card.Link href="#">{props.price}</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Card_Item;