import React from 'react';
import '../giftcard/topgiftfive.css';
import Accordion from 'react-bootstrap/Accordion';

const TopgiftFive = () => {
    return (
        <div className='fitnessallx3' >
            <div className='fitmain3'>
                <h1>FAQ</h1>
            </div>

            <div className='fitnessall3'>

                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                <p>Here you can find answers on frequently asked questions. If you cannot
                    find the answer, feel free to contact us via email or phone.</p>
                <div className='acordianp'>
                    <Accordion style={{ backgroundColor: 'transparent' }}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Can I exchange my Gift Card to money?</Accordion.Header>
                            <Accordion.Body>
                                When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. Amount is flexible and you can personalize your gift card with a message.
                                 When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. Amount is flexible and you can personalize your gift card with a message. Our gift cards have no expiration date and
                                can be used to pay for all the services in our beauty studio or in our cosmetic shop.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How much time do I have to use my Gift Card?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Can I pay for the service with my gift card?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>


            </div>

        </div>)
}

export default TopgiftFive