import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
export default function ProgressChart() {
//   const mainDiv = {
//     width: "50px",
//   };
  return (
    <div >
      <ProgressBar completed={76} bgColor="#108ACC" animateOnRender={true} />
      <br></br>
      <ProgressBar completed={31} bgColor="#FFA500" animateOnRender={true} />

      <br></br>
      <ProgressBar completed={20} bgColor="#000000" />
    </div>
  );
}
