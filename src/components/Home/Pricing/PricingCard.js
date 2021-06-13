import React from 'react';
import { Col, Row, Tab } from 'react-bootstrap';

const PricingCard = ({data, id}) => {
    return (
        <Tab.Pane eventKey={id + 1}>
            <Row>
                {
                    data.map(({title, name, price}, index) => {
                        return(
                            <Col md={4} key={index}>
                                <div className={`pricingCard pricingCard${id + 1}`}>
                                    <div className="pricingBox">
                                        <h4>{title}</h4>
                                        <p className="pricePlan"><span className={`ph${id + 1}`}>${price}/</span>month</p>
                                        <h5>{name}</h5>
                                        <p className="planDescription">Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.</p>
                                    </div>
                                    <li>Business Analysis.</li>
                                    <li>Business Analysis.</li>
                                    <li>Business Analysis.</li>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Tab.Pane>
    );
};

export default PricingCard;