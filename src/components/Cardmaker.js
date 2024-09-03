import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import "../App.css"; // Custom CSS for additional styling

const FormCard = () => {
  const [familyMembers, setFamilyMembers] = useState([
    { familyFullName: "", familyAadhar: "" },
  ]);

  const addFamilyMember = () => {
    setFamilyMembers([
      ...familyMembers,
      { familyFullName: "", familyAadhar: "" },
    ]);
  };

  const removeFamilyMember = (index) => {
    setFamilyMembers(familyMembers.filter((_, i) => i !== index));
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newFamilyMembers = [...familyMembers];
    newFamilyMembers[index][name] = value;
    setFamilyMembers(newFamilyMembers);
  };

  return (
    <Card className="form-card">
      <Row noGutters>
        <Col md={6} className="d-flex align-items-stretch">
          <div className="form-media">
            <Card.Img variant="left" src="ayurved.jpg" className="form-img" />
          </div>
        </Col>
        <Col md={6} className="d-flex align-items-stretch">
          <Card.Body>
            <Card.Title style={{ color: "#4053a0", textAlign: "center" }}>
              Registration Form
            </Card.Title>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter full name"
                      size="sm"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter phone number"
                      size="sm"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      size="sm"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter address"
                      size="sm"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="aadhar">
                    <Form.Label>Aadhar Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Aadhar number"
                      size="sm"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="pincode">
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter pincode"
                      size="sm"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" size="sm" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="member">
                    <Form.Label>Member ID</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter membership ID"
                      size="sm"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Card.Subtitle
                style={{
                  color: "#4053a0",
                  marginTop: "20px",
                  textAlign: "center",
                }}
              >
                Family Members
              </Card.Subtitle>
              {familyMembers.map((member, index) => (
                <Row key={index} className="mb-2">
                  <Col md={5}>
                    <Form.Group controlId={`familyFullName${index}`}>
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter family member's full name"
                        name="familyFullName"
                        value={member.familyFullName}
                        onChange={(e) => handleInputChange(index, e)}
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={5}>
                    <Form.Group controlId={`familyAadhar${index}`}>
                      <Form.Label>Aadhar Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter family member's Aadhar number"
                        name="familyAadhar"
                        value={member.familyAadhar}
                        onChange={(e) => handleInputChange(index, e)}
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2} className="d-flex align-items-center">
                    {/* <Button
                      variant="danger"
                      onClick={() => removeFamilyMember(index)}
                      style={{ width: "100%" }}
                    >
                      Remove
                    </Button> */}
                  </Col>
                </Row>
              ))}
              <div className="d-flex justify-content-between align-items-center">
                <Button
                  variant="success"
                  onClick={addFamilyMember}
                  style={{
                    backgroundColor: "#69bb6f",
                    borderColor: "#4053a0",
                    marginTop: "20px",
                    width: "30%",
                  }}
                >
                  Add Member
                </Button>

                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: "#4053a0",
                    borderColor: "#4053a0",
                    marginTop: "20px",
                    width: "30%",
                  }}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default FormCard;
