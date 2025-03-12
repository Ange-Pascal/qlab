// import items from "@/utils/info"

import items from "../../utils/info";

const IconList: React.FC = () => {
  return (
    <ul className=" grid md:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-4 px-10">
      {items.map((item) => (
        <li key={item.id} className="flex items-start space-x-3 p-4 shadow-sm">
         <span className="text-yellow-600"> {item.icon}</span>
          <div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </li> 
      ))}
    </ul>
  );
};

export default IconList;
