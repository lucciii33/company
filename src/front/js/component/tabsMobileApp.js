
import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';
import appleLogo from "../../img/logoapple.png";
import androidLogo from "../../img/androidLogo.png";


export function TabsMobile() {
    const [justifyActive, setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    return (
        <>
            <div className='mt-5'>
                <h2 className='text-center mt-5 pt-5'>What We Develop & Deliver</h2>
            </div>
            <div className='tab-margin-controlller mt-5'>
                <MDBTabs justify className='mb-3  p-2'>
                    <MDBTabsItem className='tab1 bg-tabs bg-dark'>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} className='text-white bor-test'>
                            iOS App Development
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem className='bg-dark tabs-border bg-tabs'>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} className='text-white bor-test'>
                            Android App Development
                        </MDBTabsLink>
                    </MDBTabsItem>
                    {/* <MDBTabsItem className='bg-dark tabs-border bg-tabs'>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'} className='text-white bor-test'>
                            Enterprises Mobile Solution
                        </MDBTabsLink>
                    </MDBTabsItem> */}
                </MDBTabs>

                <MDBTabsContent className='p-5'>
                    <MDBTabsPane show={justifyActive === 'tab1'}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div>
                                <h2 className='text-center'>iOS App Development</h2>
                                <p className='text-center'>Knowing the Human Interface Guidelines from inside out, <br /> we develop native iOS apps that speak to your customers.<br /> And is built on the latest iOS frameworks and patterns.
                                </p>
                                <div className='d-flex justify-content-center align-items-center bg-dark border-controller-mobile-app'>
                                    <div className=''>
                                        <img src={appleLogo} className='image-tabs mt-4'></img>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </MDBTabsPane>
                    <MDBTabsPane show={justifyActive === 'tab2'}> <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <h2 className='text-center'>Android App Development</h2>
                            <p className='text-center'>We consciously follow the Material Design Guidelines to create <br /> beautiful Android apps, approved the Android community guidelines.<br /> Oh, and we know the in and out of the best Android libraries.</p>
                            <div className='d-flex justify-content-center align-items-center bg-dark border-controller-mobile-app'>
                                <div className=''>
                                    <img src={androidLogo} className='image-tabs mt-4'></img>
                                </div>
                            </div>                        </div>
                    </div></MDBTabsPane>
                    {/* <MDBTabsPane show={justifyActive === 'tab3'}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div>
                                <h2 className='text-center'>Enterprise Mobile Solutions</h2>
                                <p className='text-center'>We take pride to be the only app development company <br />that builds powerful applications in the most complex enterprise environment. <br />We know how to make things happen.</p>
                                <img src="https://images.pexels.com/photos/6474473/pexels-photo-6474473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='image-tabs mt-4'></img>
                            </div>
                        </div>
                    </MDBTabsPane> */}
                </MDBTabsContent>
            </div>
        </>
    );
}