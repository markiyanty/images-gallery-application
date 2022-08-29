import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Welcome = () => (
  <Row>
    <Col xs={12} md={8} lg={10}>
      <div class="container welcome my-5 p-3">
        <div class="rounded">
          <Container>
            <h1 class="text-black">Images Gallery</h1>
            <small class="text-grey">
              This is a simple app that retrieves photos using UNSplash API. In
              ordeer to start input any term inside search field.
            </small>
            <p>
              {' '}
              <Button
                href="hhtps://unsplash.com"
                target="_blank"
                className="mt-3"
                variant="danger"
              >
                Learn more
              </Button>
            </p>
          </Container>
        </div>
      </div>
    </Col>
  </Row>
);
export default Welcome;
