import React from "react";
import { Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MainVideo from "../../Components/MainVideo";
function InnerPageSkeleton({ ...rest }) {
  return (
    <>
        <MainVideo />
        <Container>
        <Row className="py-4 bbnn">

            <Skeleton
            baseColor="#4a4747"
            highlightColor= "#6e6c6c"
            count={10}
            height={30}

            style={{ marginBottom: "1rem" }}
            />
        </Row>
        </Container>
    </>
  );
}

export default InnerPageSkeleton;
