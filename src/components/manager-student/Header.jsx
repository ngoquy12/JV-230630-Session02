import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <>
          {/* Header start */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/index.html">
                <img
                  height={50}
                  src="https://rikkei.edu.vn/wp-content/uploads/2022/04/Logo-Rikkei.png"
                  alt=""
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              />
            </div>
          </nav>
          {/* Header end */}
        </>
      </div>
    );
  }
}
