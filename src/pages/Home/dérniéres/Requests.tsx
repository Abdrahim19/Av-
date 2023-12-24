import { Col, Container, Row } from "react-bootstrap"
import Request from "./Request";
const Requests = () => {
  return (
    <Container className='py-3' fluid="lg">
      <h1 className="Request_titel text-center mb-4-81rem">Les dérniéres demandes</h1>
      <Row style={{gap:'1rem'}}>
        <Col>
        <Request 
            userInfo={{
              profileImg: "",
              username: "Gilberto B.",
              user_location: "Vienne (Jean-Moulin) - 13,4 km"
            }} Request_titel={""} Request_discrption={""} Request_img={""} />
        </Col>
        <Col>
        <Request 
            userInfo={{
              profileImg: "",
              username: "",
              user_location: ""
            }} Request_titel={""} Request_discrption={""} Request_img={""} />
        </Col>
        <Col>
        <Request 
            userInfo={{
              profileImg: "",
              username: "",
              user_location: ""
            }} Request_titel={""} Request_discrption={""} Request_img={""} />
        </Col>
      </Row>
    </Container>
  )
}

export default Requests