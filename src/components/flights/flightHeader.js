import React, { useState } from "react";
import { Row, Col } from "react-flexbox-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const FlightHeader = props => {
  // HOOKS STATE ==========================
  const [pagCount, setCount] = useState(0);

  const paginate = () => {
    // Use hooks (gotta use variable cos useState is async)
    let count = pagCount + 25;
    setCount(count);
    props.handlePaginate(null, count);
  };

  const prevPagination = () => {
    // Use hooks (gotta use variable cos useState is async)
    let count = pagCount - 25;
    if (pagCount >= 25) {
      setCount(count);
      props.handlePaginate(null, count);
    }
  };

  return (
    <div className="sectionHeader">
      <Row between="xs">
        <Col xs>
          <FontAwesomeIcon icon={faChevronLeft} size="xs" onClick={prevPagination} />
        </Col>
        <Col xs>
          <span>Flights</span>
        </Col>
        <Col xs>
          <FontAwesomeIcon icon={faChevronRight} size="xs" onClick={paginate} />
        </Col>
      </Row>
    </div>
  )
}
