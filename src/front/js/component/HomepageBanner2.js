import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

const HomepageBanner2 = ({ width }) => {
  return (
    <div className="bg-banner-1 homepage-banner-padding">
      <h2 className="text-center text-gradient-home mb-4">Our Story</h2>
      <div className="d-flex">
        <MDBRow className="h-100 d-flex align-items-center">
          <MDBCol
            className="d-flex justify-content-center align-items-center"
            sm="12"
            md="12"
            lg="6"
          >
            <div className="m-5">
              {width > 576 ? (
                <div>
                  <div className="d-flex">
                    <div className="person1 me-3">
                      <img
                        src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="img-person-1"
                      />
                    </div>
                    <div className="person2">
                      <img
                        src="https://images.pexels.com/photos/3178744/pexels-photo-3178744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="img-person-2"
                      />
                    </div>
                  </div>
                  <div className="d-flex ">
                    <div className="person3 me-3">
                      <img
                        src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="img-person-3"
                      />
                    </div>
                    <div className="person4">
                      <img
                        src="https://images.pexels.com/photos/7989039/pexels-photo-7989039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="img-person-4"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <img
                    className="img-fluid border-radius-8"
                    src="https://images.pexels.com/photos/3178744/pexels-photo-3178744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="group-image"
                  />
                </div>
              )}
            </div>
          </MDBCol>
          <MDBCol className="h-100" sm="12" md="12" lg="6">
            <div>
              <div className="text-controller-2 my-auto px-5 h-100">
                <p className="paragraph-home-text p-md-5 text-center m-0">
                  We started as two individuals who attended the same developer
                  bootcamp. We started helping each other from time to time on
                  projects and assignments. As time progressed we collaborated
                  on an project website for a startup company. During this time
                  we realized that our strengths complimented each other to
                  build an amazing website. We decided to start our buisness
                  Bluelight Tech to offer solutions for companies and small
                  businesses alike to have an online presence.
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};

export default HomepageBanner2;
