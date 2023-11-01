import React from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => {
    return state.spinnerReducer;
  });

  return isLoading ? (
    <div className="spinner ">
      <RingLoader margin={30} size={150} color="hsla(360, 67%, 53%, 1)" />
    </div>
  ) : (
    <></>
  );
}
