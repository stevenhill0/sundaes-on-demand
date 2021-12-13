import React from 'react';
import Col from 'react-bootstrap/Col';

const ScoopOption = ({ name, imagePath }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textalign: 'center' }}>
      <div>
        <img
          style={{ width: '75%' }}
          src={`http://localhost:3030/${imagePath}`}
          alt={`${name} scoop`}
        ></img>
      </div>
    </Col>
  );
};

export default ScoopOption;
