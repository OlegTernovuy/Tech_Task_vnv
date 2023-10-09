import { categories } from "../../../data";

export const ServicesNavbar = ({ setServicesId }) => {
  const handleServiceId = (id) => {
    setServicesId(id);
  };
  return (
    <div className="services-navbar-wrapper">
      <ul className="services-navbar">
        {categories.map((category) => {
          return (
            <li
              key={category.id}
              className="services-navbar-name"
              onClick={() => handleServiceId(category.id)}
            >
              {category.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
