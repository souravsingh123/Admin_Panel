import React from "react";
import ServiceCard from "./ServiceCard";
import serviceData from "./ServiceData";
const Service = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            {serviceData.map((s) => {
              return (
                <ServiceCard
                  key={s.id}
                  icon={s.icon}
                  title={s.title}
                  desc={s.desc}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
