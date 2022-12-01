import React from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const SubmitModal = (props) => {
  return (
    <>
      <MDBModal show={props.show} setShow={props.set} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className="text-center w-100">
                Thanks for Contacting Us!
              </MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              <p className="text-center m-0">
                We will get back to you shortly with a response.
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                className="btn btn-secondary mx-auto"
                onClick={props.func}
              >
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default SubmitModal;
