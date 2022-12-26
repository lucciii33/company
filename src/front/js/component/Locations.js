import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";

const Locations = () => {
  return (
    <div className="pb-5">
      <div className="p-5">
        <h1 className="text-dark text-center text-or w-100">Locations</h1>
        <div className="d-flex justify-content-between mt-4">
          <MDBRow>
            <MDBCol sm="12" md="12" lg="4">
              <div className="entire-card p-4 m-2 text-or">
                <img
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=Miami,Florida&zoom=12&size=600x600&key=AIzaSyAj-Sv-ohOJEKLFU7mOqrjw45UIRlb9vK0`}
                  alt="Miami"
                  className="img-fluid"
                />
                <h6 className="py-1">- United States, Miami, FL</h6>
              </div>
            </MDBCol>
            <MDBCol sm="12" md="12" lg="4">
              <div className="entire-card p-4 m-2 text-or">
                <img
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=Madrid,Spain&zoom=12&size=600x600&key=${process.env.GOOGLE_API_KEY}`}
                  alt="Madrid"
                  className="img-fluid"
                />
                <h6 className="py-1">- Spain, Madrid</h6>
              </div>
            </MDBCol>
            <MDBCol sm="12" md="12" lg="4">
              <div className="entire-card p-4 m-2 text-or">
                <img
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=Caracas,Venezuela&zoom=12&size=600x600&key=${process.env.GOOGLE_API_KEY}`}
                  alt="Caracas"
                  className="img-fluid"
                />
                <h6 className="py-1">- Venezuela, Caracas</h6>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    </div>
  );
};

export default Locations;
