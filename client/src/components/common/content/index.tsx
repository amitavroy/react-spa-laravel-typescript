import React, { Component } from 'react';

interface Props {
  title: String
}

class Content extends Component<Props> {
  render() {
    const { title } = this.props;
    return (
      <div className="content-wrapper">

        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6"><h1>{title}</h1></div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/" onClick={event => event.preventDefault()}>Home</a></li>
                  <li className="breadcrumb-item active">Blank Page</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="content">{this.props.children}</section>
      </div>
    );
  }
}

export default Content;
