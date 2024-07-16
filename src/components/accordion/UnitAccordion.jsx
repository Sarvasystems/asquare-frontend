import React from 'react';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import { FaRuler } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import "./UnitAccordion.css"
import floorplan from "../../assets/floor_plan.png"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!')
  );

  return (
    <Card.Header type="button" onClick={decoratedOnClick}>
      {children}
    </Card.Header>
  );
};

const UnitAccordion = () => {
  return (
    <>
      <h1>Units</h1>
      <p>from developer</p>
<div className="container mt-4 accordion-container">
      <div className="my-3">
        <h5>APARTMENT</h5>
        <Accordion className="mb-2">
          <Card className='accordion-card'>
            <CustomToggle eventKey="0">
              <div className="d-flex justify-content-between">
                <span>1 Bed</span>
                <span>
                  <FaRuler className="mr-2" />
                  928-928 sqft
                </span>
                <span>
                <IoIosArrowDown />
                </span>
              </div>
            </CustomToggle>
            <Accordion.Collapse eventKey="0">
            <Card.Body className='d-flex justify-content-between'>
                <div>
                  <p>Layout Type</p>
                  <span>Type A</span>
                </div>
                <div>
                  <p>Size (sqft)</p>
                  <span>928</span>
                </div>
                <div>
                  <p>Floor Plan</p>
                  <img src={floorplan} alt="floorplan" style={{ width: '100px', height: '100px' }}/>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion className="mb-2">
          <Card className='accordion-card'>
            <CustomToggle eventKey="1">
              <div className="d-flex justify-content-between">
                <span>2 Beds</span>
                <span>
                  <FaRuler className="mr-2" />
                  1792-1792 sqft
                </span>
                <span>
                <IoIosArrowDown />
                </span>
              </div>
            </CustomToggle>
            <Accordion.Collapse eventKey="1">
            <Card.Body className='d-flex justify-content-between'>
                <div>
                  <p>Layout Type</p>
                  <span>Type A</span>
                </div>
                <div>
                  <p>Size (sqft)</p>
                  <span>928</span>
                </div>
                <div>
                  <p>Floor Plan</p>
                  <img src={floorplan} alt="floorplan" style={{ width: '100px', height: '100px' }}/>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion className="mb-2">
          <Card className='accordion-card'>
            <CustomToggle eventKey="2">
              <div className="d-flex justify-content-between">
                <span>3 Beds</span>
                <span>
                  <FaRuler className="mr-2" />
                  2155-2155 sqft
                </span>
                <span>
                <IoIosArrowDown />
                </span>
              </div>
            </CustomToggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body className='d-flex justify-content-between'>
                <div>
                  <p>Layout Type</p>
                  <span>Type A</span>
                </div>
                <div>
                  <p>Size (sqft)</p>
                  <span>928</span>
                </div>
                <div>
                  <p>Floor Plan</p>
                  <img src={floorplan} alt="floorplan" style={{ width: '100px', height: '100px' }}/>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>

      <div className="my-3">
        <h5>DUPLEX</h5>
        <Accordion className="mb-2">
          <Card className='accordion-card'>
            <CustomToggle eventKey="3">
              <div className="d-flex justify-content-between">
                <span>3 Beds</span>
                <span>
                  <FaRuler className="mr-2" />
                  1267-1267 sqft
                </span>
                <span>
                <IoIosArrowDown />
                </span>
              </div>
            </CustomToggle>
            <Accordion.Collapse eventKey="3">
            <Card.Body className='d-flex justify-content-between'>
                <div>
                  <p>Layout Type</p>
                  <span>Type A</span>
                </div>
                <div>
                  <p>Size (sqft)</p>
                  <span>928</span>
                </div>
                <div>
                  <p>Floor Plan</p>
                  <img src={floorplan} alt="floorplan" style={{ width: '100px', height: '100px' }}/>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion className="mb-2">
          <Card className='accordion-card'>
            <CustomToggle eventKey="4">
              <div className="d-flex justify-content-between">
                <span>4 Beds</span>
                <span>
                  <FaRuler className="mr-2" />
                  1790-1790 sqft
                </span>
                <span>
                <IoIosArrowDown />
                </span>
              </div>
            </CustomToggle>
            <Accordion.Collapse eventKey="4">
            <Card.Body className='d-flex justify-content-between'>
                <div>
                  <p>Layout Type</p>
                  <span>Type A</span>
                </div>
                <div>
                  <p>Size (sqft)</p>
                  <span>928</span>
                </div>
                <div>
                  <p>Floor Plan</p>
                  <img src={floorplan} alt="floorplan" style={{ width: '100px', height: '100px' }}/>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>

      <div className="my-3">
        <h5>PENTHOUSE</h5>
        <Accordion className="mb-2">
          <Card className='accordion-card'>
            <CustomToggle eventKey="5">
              <div className="d-flex justify-content-between">
                <span>4 Beds</span>
                <span>
                  <FaRuler className="mr-2" />
                  5629-5629 sqft
                </span>
                <span>
                <IoIosArrowDown />
                </span>
              </div>
            </CustomToggle>
            <Accordion.Collapse eventKey="5">
            <Card.Body className='d-flex justify-content-between'>
                <div>
                  <p>Layout Type</p>
                  <span>Type A</span>
                </div>
                <div>
                  <p>Size (sqft)</p>
                  <span>928</span>
                </div>
                <div>
                  <p>Floor Plan</p>
                  <img src={floorplan} alt="floorplan" style={{ width: '100px', height: '100px' }}/>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
    </>
  );
};

export default UnitAccordion;

