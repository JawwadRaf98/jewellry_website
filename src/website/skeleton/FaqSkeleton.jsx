import React from "react";
import { Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function FaqSkeleton({ ...rest }) {
  return (
    <Container>
      <Row className="py-4 bbnn">
        <div className="text-left py-3">
          <h2 className="text-2xl text-white">SELECT A CATEGORY</h2>
        </div>
        <Skeleton
          baseColor="#4a4747"
          highlightColor= "#6e6c6c"
          count={10}
          height={30}

          style={{ marginBottom: "1rem" }}
        />
    </Row>
    </Container>
     
  );
}

export default FaqSkeleton;
