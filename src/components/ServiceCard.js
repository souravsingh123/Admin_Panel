import React from "react";

const ServiceCard = (props) => {
  return (
    <>
      <div className="col-lg-3 col-sm-6">
        <div className="service-item text-center pt-3">
          <div className="p-4">
            {props.icon}
            <h5 className="mb-3">{props.title}</h5>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
