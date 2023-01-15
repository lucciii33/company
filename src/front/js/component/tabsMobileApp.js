
import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';

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
            <div className='tab-margin-controlller'>
                <MDBTabs justify className='mb-3 bg-dark p-2'>
                    <MDBTabsItem className='tab1'>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} className='text-white'>
                            Link
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem className='text-white'>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} className='text-white'>
                            link
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'} className='text-white'>
                            Another link
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent className='p-5'>
                    <MDBTabsPane show={justifyActive === 'tab1'}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div>
                                <h2 className='text-center'>LOREM IPSUM LOER ISPUM </h2>
                                <p className='text-center'>Tab 1 content Tab 1 content Tab 1 content Tab 1 content <br /> Tab 1 content Tab 1 content Tab 1 content Tab 1 content</p>
                                <img src="https://images.pexels.com/photos/6474473/pexels-photo-6474473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='image-tabs'></img>
                            </div>
                        </div>
                    </MDBTabsPane>
                    <MDBTabsPane show={justifyActive === 'tab2'}> <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <h2 className='text-center'>LOREM IPSUM LOER ISPUM </h2>
                            <p className='text-center'>Tab 2 content Tab 2 content Tab 2 content Tab 2 content <br /> Tab 2 content Tab 2 content Tab 2 content Tab 2 content</p>
                            <img src="https://images.pexels.com/photos/6474473/pexels-photo-6474473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='image-tabs'></img>
                        </div>
                    </div></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === 'tab3'}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div>
                                <h2 className='text-center'>LOREM IPSUM LOER ISPUM </h2>
                                <p className='text-center'>Tab 3 content Tab 3 content Tab 3 content Tab 3 content <br /> Tab 3 content Tab 3 content Tab 3 content Tab 3 content</p>
                                <img src="https://images.pexels.com/photos/6474473/pexels-photo-6474473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='image-tabs'></img>
                            </div>
                        </div>
                    </MDBTabsPane>
                </MDBTabsContent>
            </div>
        </>
    );
}