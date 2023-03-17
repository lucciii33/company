import React, { useState, useContext } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Context } from "../store/appContext";


const ProcessBanner = () => {
  const { store } = useContext(Context);
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <>
      <div className="py-5 px-md-2 px-lg-5 bg-light">
        <h2 className="text-center  text-dark w-100 pb-5 fs-50 Orbitron">{store.language == "en" ? "Our Process" : "Nuestro Proceso"}</h2>
        <MDBRow className="px-5 pb-3">
          <MDBCol md="12" lg="3">
            <div className="d-flex align-items-center justify-content-center h-100 p-3">
              <MDBTabs className="flex-column text-center border-0">
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleVerticalClick("tab1")}
                    active={verticalActive === "tab1"}
                    className={
                      verticalActive === "tab1"
                        ? "text-start p-3 fs-20 text-dark border border-dark border-0 rounded-0 border-start"
                        : "text-start p-3 fs-20 text-secondary border border-dark border-0 rounded-0 "
                    }
                  >
                    1. {store.language == "en" ? "Idea of Concept" : "Idea del Concepto"}
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleVerticalClick("tab2")}
                    active={verticalActive === "tab2"}
                    className={
                      verticalActive === "tab2"
                        ? "text-start p-3 fs-20 text-dark border border-0 border-dark rounded-0 border-start"
                        : "text-start p-3 fs-20 text-secondary border border-0 border-dark rounded-0 "
                    }
                  >
                    2. {store.language == "en" ? "Design" : "Diseño"}
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleVerticalClick("tab3")}
                    active={verticalActive === "tab3"}
                    className={
                      verticalActive === "tab3"
                        ? "text-start p-3 fs-20 text-dark border border-0 border-dark rounded-0 border-start"
                        : "text-start p-3 fs-20 text-secondary border border-0 border-dark rounded-0 "
                    }
                  >
                    3. {store.language == "en" ? "Development" : "Desarrollo"}
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
            </div>
          </MDBCol>
          <MDBCol md="12" lg="9">
            <MDBTabsContent>
              <MDBTabsPane show={verticalActive === "tab1"}>
                <div className="p-sm-2 p-md-3 p-lg-5 bg-dark rounded">
                  <MDBRow>
                    <MDBCol md="12" lg="6">
                      <img
                        className="img-fluid rounded"
                        src="https://picsum.photos/id/444/4200/2800"
                        alt="design"
                      />
                    </MDBCol>
                    <MDBCol md="12" lg="6">
                      <div className="p-3 d-flex align-items-center h-100 text-white">
                        <div>
                          <h3 className="Orbitron">{store.language == "en" ? "Idea of Concept" : "Idea del Concepto"}</h3>
                          <p className="ubunto">
                            {store.language == "en" ? "This is the creative area where brainstorming occurs. All ideas are processed and built upon to address the company's needs." : "Esta es el área creativa donde se realiza la lluvia de ideas. Todas las ideas se procesan y se desarrollan para abordar las necesidades de la empresa."}
                          </p>
                        </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab2"}>
                <div className="p-sm-2 p-md-3 p-lg-5 bg-dark rounded">
                  <MDBRow>
                    <MDBCol md="12" lg="6">
                      <img
                        className="img-fluid rounded"
                        src="https://picsum.photos/id/42/4200/2800"
                        alt="design"
                      />
                    </MDBCol>
                    <MDBCol md="12" lg="6">
                      <div className="p-3 d-flex align-items-center h-100 text-white">
                        <div>
                          <h3 className="Orbitron">{store.language == "en" ? "Design" : "Diseño"}</h3>
                          <p className="ubunto">
                            {store.language == "en" ? "Our design process is meticulous. We ensure that all features and modern looks are considered to provide the best result for our customers." : "Nuestro proceso de diseño es meticuloso. Nos aseguramos de considerar todas las características y aspectos modernos para proporcionar el mejor resultado a nuestros clientes."}
                          </p>
                        </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab3"}>
                <div className="p-sm-2 p-md-3 p-lg-5 bg-dark rounded">
                  <MDBRow>
                    <MDBCol md="12" lg="6">
                      <img
                        className="img-fluid rounded"
                        src="https://picsum.photos/id/60/4200/2800"
                        alt="design"
                      />
                    </MDBCol>
                    <MDBCol md="12" lg="6">
                      <div className="p-3 d-flex align-items-center h-100 text-white">
                        <div>
                          <h3 className="Orbitron">{store.language == "en" ? "Development" : "Desarrollo"}</h3>
                          <p className="ubunto">
                            {store.language == "en" ? "All designs are then carefully recreated into the final product. Here optimization occurs to allow for functionality to meet creative design." : "Todos los diseños son recreados cuidadosamente en el producto final. Aquí ocurre la optimización para permitir que la funcionalidad cumpla con el diseño creativo."}
                          </p>
                        </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </div>
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
};

export default ProcessBanner;
