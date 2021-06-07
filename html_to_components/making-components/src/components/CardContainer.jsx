import Card from "./Card";


function CardContainer() {

  let vacations = [1,2,3,4,5,6,7]

  let cards = vacations.map(el => <Card />)

  // cards = [<Card />, <Card />,<Card />,<Card />,<Card />]


  return (
    <div class='main-container'>
      {cards}
    </div>
  )
}


export default CardContainer