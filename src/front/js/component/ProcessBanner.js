import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const ProcessBanner = () => {
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <>
      <div className="p-5 bg-dark text-white">
        <h1 className="text-center fs-52 text-white w-100 pb-5">Our Process</h1>
        <MDBRow>
          <MDBCol size="3">
            <MDBTabs className="flex-column text-center">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab1")}
                  active={verticalActive === "tab1"}
                  className={
                    verticalActive === "tab1"
                      ? "text-start fs-20 text-white bg-dark border border-0 rounded-0 border-start"
                      : "text-start fs-20 text-white bg-dark border border-0 rounded-0 "
                  }
                >
                  1. Idea of Concept
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab2")}
                  active={verticalActive === "tab2"}
                  className={
                    verticalActive === "tab2"
                      ? "text-start fs-20 text-white bg-dark border border-0 rounded-0 border-start"
                      : "text-start fs-20 text-white bg-dark border border-0 rounded-0 "
                  }
                >
                  2. Design
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab3")}
                  active={verticalActive === "tab3"}
                  className={
                    verticalActive === "tab3"
                      ? "text-start fs-20 text-white bg-dark border border-0 rounded-0 border-start"
                      : "text-start fs-20 text-white bg-dark border border-0 rounded-0 "
                  }
                >
                  3. Development
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
          </MDBCol>
          <MDBCol size="9">
            <MDBTabsContent>
              <MDBTabsPane show={verticalActive === "tab1"}>
                Home content
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab2"}>
                Profile content
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab3"}>
                Messages content
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
};

export default ProcessBanner;
