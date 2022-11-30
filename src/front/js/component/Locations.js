import React from "react";

const Locations = () => {
  return (
    <div className="pb-5">
      <div className="p-5">
        <h1 className="text-dark text-center text-or w-100">Locations</h1>
        <div className="d-flex justify-content-between mt-4">
          <div className="entire-card">
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=Miami,Florida&zoom=12&size=300x300&key=${process.env.GOOGLE_API_KEY}`}
              alt="Miami"
            />
            <p className="px-3 py-1">
              United States
              <br />
              Miami, FL
            </p>
          </div>
          <div className="entire-card">
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=Madrid,Spain&zoom=12&size=300x300&key=${process.env.GOOGLE_API_KEY}`}
              alt="Miami"
            />
            <p className="px-3 py-1">
              Spain
              <br />
              Madrid
            </p>
          </div>
          <div className="entire-card">
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=Caracas,Venezuela&zoom=12&size=300x300&key=${process.env.GOOGLE_API_KEY}`}
              alt="Miami"
            />
            <p className="px-3 py-1">
              Venezuela
              <br />
              Caracas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
