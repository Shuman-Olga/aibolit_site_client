import { Container } from "react-bootstrap";
import WOHimg1 from "../assets/img/holiday.png";

const WorkOnHolidays = () => {
  return (
    <Container fluid id="workonholidays">
      <div className="d-flex justify-content-center align-items-center py-3 mb-3 block-message ">
        <img src={WOHimg1} alt="holiday" title="holiday" className="me-2" />
        <p className=" fs-5 fw-bold">23, 24, 25 февраля выходной!</p>
      </div>
    </Container>
  );
};

export default WorkOnHolidays;
