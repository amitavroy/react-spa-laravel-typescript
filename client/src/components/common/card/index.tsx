import React, { Component } from "react";

interface Props {
  title: string;
  titleIcon?: string;
  footer?: any;
}

class Card extends Component<Props> {
  render() {
    const { title, titleIcon, children, footer } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">
            {titleIcon && <i className={`ion ${titleIcon} mr-1`}></i>}
            {title}
          </h3>

          <div className="card-tools">
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="collapse"
              data-toggle="tooltip"
              title="Collapse"
            >
              <i className="fas fa-minus"></i>
            </button>
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="remove"
              data-toggle="tooltip"
              title="Remove"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        <div className="card-body">{children}</div>

        {footer && <div className="card-footer">{footer}</div>}
      </div>
    );
  }
}

export default Card;
