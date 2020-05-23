import React, { Component } from "react";
import "./_style.scss";

interface Props {
  title: string;
  visibility: boolean;
  size: string;
  onClose: () => void;
}

class Modal extends Component<Props> {
  render() {
    const { title, visibility, onClose, children, size } = this.props;
    return (
      <React.Fragment>
        <div
          className={`modal fade ${visibility ? "show" : "hide"}`}
          id="modal-default"
        >
          <div className={`modal-dialog modal-${size}`}>
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{title}</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => onClose()}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{children}</div>
              <div className="modal-footer justify-content-between">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  onClick={() => onClose()}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`modal-backdrop fade ${visibility ? "show" : "hide"}`}
        ></div>
      </React.Fragment>
    );
  }
}

export default Modal;
