import {useState} from 'react'

function Card(props) {
  let [isGreen, setIsGreen] = useState(true)

  // let {place: {name, content, image}} = props
  let {name, content, image} = props

  console.log("PROPS", props);
  

  function handleClick(e){
    // setIsGreen(!isGreen)
    setIsGreen(isGreen => !isGreen)

  }

  return (
    <div className='card' onClick={handleClick} >
      <h2>{name}</h2>
      <h5>Color: {isGreen ? "GREEN!!" : "BlUUEE!!"} </h5>
      <p>{content}</p>
      <img className="content-img" src={image} />
    </div>
  )
}

export default Card