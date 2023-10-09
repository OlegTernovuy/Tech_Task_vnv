import { useState } from "react";
import "./services.scss";
import { ServicesNavbar } from "./ServicesNavbar";
import { ServicesDesc } from "../../../data";
import { Service } from "./Service";

export const Services = () => {
  const [servicesId, setServicesId] = useState(1);

  return (
    <div className="services" id="services">
      <ServicesNavbar setServicesId={setServicesId} />
      <div>
        {ServicesDesc.map((item) => {
          return (
            servicesId === item.id && <Service key={item.id} item={item} />
          );
        })}
      </div>
    </div>
  );
};
