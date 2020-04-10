import React, { Component, Fragment } from 'react';

interface Props {
  message?: string
}

class ValidationErorr extends Component<Props> {
  render() {
    const { message } = this.props;
    return (
      <React.Fragment>
        {(message) ? <div className="validation-error">{message}</div> : null}
      </React.Fragment>
    );
  }
}

export default ValidationErorr;
