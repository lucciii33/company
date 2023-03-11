import {
  MDBCol,
  MDBRow,
  MDBInput,
  MDBTextArea,
  MDBBtn,
} from "mdb-react-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import SubmitModal from "./SubmitModal";

const CallToActionHome = () => {
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    if (
      formData.name !== "" ||
      formData.email !== "" ||
      formData.phone !== "" ||
      formData.description !== ""
    ) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        description: "",
      });
      toggleShow();
    }
  };

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  console.log("Form Data: ", formData);

  return (
    <>
      <SubmitModal
        show={basicModal}
        func={() => toggleShow()}
        set={setBasicModal}
      />
      <div className="py-5 px-sm-2 px-md-5 bg-blue-gradient">
        <MDBRow>
          <MDBCol
            className="d-flex justify-content-center align-items-center py-3"
            md="12"
            lg="6"
          >
            <div>
              <h1 className="text-white text-center text-wrap m-0 mb-sm-4">
                {store.language === "en" ? "Let's make your idea a reality" : "Hacemos tu idea realidad"}
              </h1>
            </div>
          </MDBCol>
          <MDBCol
            className="d-flex justify-content-center align-items-center"
            md="12"
            lg="6"
          >
            <div className="w-75">
              <h3 className="text-white text-center text-or">
                {store.language === "en" ? "Get in touch with us!" : "Ponte en contacto con nosotros"}
              </h3>
              <MDBInput
                className="mb-3 ubunto"
                placeholder="Name"
                id="typeText"
                type="text"
                name="name"
                value={formData?.name}
                onChange={handleChange}
              />
              <MDBInput
                className="mb-3 ubunto"
                placeholder="Email"
                id="typeText"
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleChange}
              />
              <MDBInput
                className="mb-3 ubunto"
                placeholder="Phone"
                id="typeText"
                type="tel"
                name="phone"
                value={formData?.phone}
                onChange={handleChange}
              />
              <MDBTextArea
                className="mb-3 ubunto"
                placeholder="Project description ..."
                id="textAreaExample"
                rows={4}
                name="description"
                value={formData?.description}
                onChange={handleChange}
              />
              <div className="d-flex justify-content-center">
                <button className="button-29 px-5" onClick={() => onSubmit()}>
                  SUBMIT
                </button>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
};

export default CallToActionHome;
