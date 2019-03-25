import React, { Component } from "react";
import cardsList from "../../mocks/cardsList";
class PriceCard extends Component {
  render() {
    return (
      <div className="card-deck mb-3 text-center">
        {cardsList.map((element, index) => (
          <div className="card mb-4 shadow-sm" key={index}>
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">{element.title}</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                ${element.price} <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                {element.description.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
              <button
                type="button"
                className={"btn btn-lg btn-block " + element.btn.nom}
              >
                {element.btn.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default PriceCard;
