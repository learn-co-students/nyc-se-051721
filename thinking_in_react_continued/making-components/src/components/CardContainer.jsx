import Card from "./Card";

function CardContainer(props) {
  
  

  // console.log(useState("hello"));

  // let cards = places.map(place => <Card name={place.name} image={place.image} content={place.content}/>)
  let cards = props.places.map(place => <Card key={place.id} {...place} />)
  // let cards = places.map(place => <Card place={place}/>)

  // cards = [<Card />, <Card />,<Card />,<Card />,<Card />]


  return (
    <div className='main-container'>
      {cards}
    </div>
  )
}


export default CardContainer