import React from "react";
import { CSSTransition } from "react-transition-group";

import ClientOnlyPortal from "../../common/ClientOnlyPortal";

export default function Modal(props) {
  const { showModal, setShowModal, height, width } = props;
  return (
    <>
      <ClientOnlyPortal selector="#modal">
        <CSSTransition
          in={showModal}
          unmountOnExit
          timeout={100}
        >
          {props.children}
        </CSSTransition>
      </ClientOnlyPortal>
      {showModal && (
        <ClientOnlyPortal selector="#overlay">
          <div
            className="overlay"
            onClick={(e) => {
              setShowModal(false);
            }}
          ></div>
        </ClientOnlyPortal>
      )}
    </>
  );
}
