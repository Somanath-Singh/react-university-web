import React from "react";
import "./Title.css";

const Title = ({ subTitle, title }) => {
  return (
    <div className="title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;

// export default function Title(prop) {
//   return (
//     <div className="title">
//       <p>{prop.programs[0]}</p>
//       <h2>{prop.programs[1]}</h2>
//     </div>
//   );
// }
