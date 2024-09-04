// eslint-disable-next-line no-unused-vars
// import { Card, CardTitle, CardBody, CardImg, CardText} from "reactstrap"


const MenuItem = ({dish, handalClick}) => {
  return (
    // <div>{dish.id} {dish.name}
    // <img src={dish.image} alt="nane"></img>
    // {dish.description}
    // </div>

  //   <Card className="my-2">
  //   <CardImg
  //     alt="Card image cap"
  //     src={dish.image}
  //     style={{
  //       height: 180
  //     }}
  //     top
  //     width="100%"
  //   />
  //   <CardBody>
  //     <CardTitle tag="h5">
  //       Card Title
  //     </CardTitle>
  //     {/* <CardText>
  //       This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
  //     </CardText> */}
  //     <CardText>
  //       <small className="text-muted">
  //         Last updated 3 mins ago
  //       </small>
  //     </CardText>
  //   </CardBody>
  // </Card>

  <div className="card text-bg-dark p-2 m-4  text-body " onClick={()=>handalClick(dish)}>
  <img src={dish.image} className="card-img" alt="..."/>
  <div className="card-img-overlay text-info">
    <h5 className="card-title">Card title</h5>
    {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p> */}
  </div>
</div>
    
  )
}

export default MenuItem