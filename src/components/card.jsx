import React from "react";

const Card = (prop) => {
  console.log(prop.Datos);
  const { id, name, gender, type, location, img, origin, species, status } =
    prop.Datos;
  return (
    <div>
      <div style={{ width: "25rem" }}>
        <div className="card">
          {name ? (
            <div className="card-body">
              {img && (
                <div className="d-flex justify-content-center">
                  <img
                    src={img}
                    alt=""
                    className="card-img-top"
                    style={{ width: "200px", height: "auto" }}
                  />
                </div>
              )}
              {name && (
                <div className="d-flex justify-content-center mt-3 mb-3">
                  <h5 className="card-title text-uppercase">
                    name: <b>{name}</b>
                  </h5>
                </div>
              )}
              {id && (
                <div className="d-flex justify-content-center mt-3 mb-3">
                  <p className="card-text text-uppercase">
                    id: <b>{id}</b>
                  </p>
                </div>
              )}
              {species && (
                <div className="d-flex justify-content-center mt-3 mb-3">
                  <p className="card-text text-uppercase">
                    species: <b>{species}</b>
                  </p>
                </div>
              )}
              {type && (
                <div className="d-flex justify-content-center mt-3 mb-3">
                  <p className="card-text text-uppercase">
                    type: <b>{type}</b>
                  </p>
                </div>
              )}
              {gender && (
                <div className="d-flex justify-content-center mt-3 mb-3">
                  <p className="card-text text-uppercase">
                    gender: <b>{gender}</b>
                  </p>
                </div>
              )}
              {location && (
                <div className="d-flex justify-content-center mt-3 mb-3">
                  <p className="card-text text-uppercase">
                    location: <b>{location}</b>
                  </p>
                </div>
              )}
              {origin && (
                <div className="d-flex justify-content-center mt-3 mb-3">
                  <p className="card-text text-uppercase">
                    origin: <b>{origin}</b>
                  </p>
                </div>
              )}
              {status && (
                <div className="d-flex justify-content-center mt-3 mb-3">
                  <p className="card-text text-uppercase">
                    status: <b>{status}</b>
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              <h2>No requests</h2>
            </div>
          )}
          <div className="d-flex justify-content-center mb-2">
            <button onClick={prop.getDatos} className="btn btn-secondary">
              get a character
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
