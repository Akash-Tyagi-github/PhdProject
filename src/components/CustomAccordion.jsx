import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import SiteConsideration1 from './SiteConsideration1';

const CustomAccordion = () => {
    //defaultActiveKey={['0']}

    return (
        <>
            <Accordion alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Physical layout</Accordion.Header>
                    <Accordion.Body>
                        <h6>Site consideration</h6>
                       <SiteConsideration1/>
                        <h6>Ergonomics into archietecture design</h6>
                        <ul>
                            <li>Layout and space sizes</li>
                            <li>Door sizes and window avaialbility</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                {/* <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item> */}
            </Accordion>
        </>
    )
}

export default CustomAccordion