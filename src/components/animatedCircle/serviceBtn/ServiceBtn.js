"use client";
import { useState } from "react";

export default function ServiceBtn(props) {
  const [showDetail, setShowDetail] = useState(false);
  const [plusDetail, setPlusDetail] = useState(false);
  const onClickHandler = () => {
    setShowDetail(!showDetail);
    setPlusDetail(!plusDetail);
  };

  return (
    <div className="p-4 w-[500px]">
      <div className="border-b border-gray-300">
        <div onClick={onClickHandler} className="cursor-pointer">
          <button className="mb-3 font-bold rounded focus:outline-none focus:shadow-outline">
            {props.title}
          </button>

          {plusDetail ? (
            <span className="float-right text-2xl pb-6">-</span>
          ) : (
            <span className="float-right text-2xl pb-6">+</span>
          )}
        </div>
        {showDetail && (
          <div>
            <p className="mb-5 text-gray-700">{props.para}</p>
            <strong className="font-semibold text-sm">{props.heading}</strong>
            <p className="mb-5 text-gray-700">{props.para2}</p>
            <strong className="font-semibold text-sm">{props.heading2}</strong>
            <p className="mb-5 text-gray-700">{props.para3}</p>
            <strong className="font-semibold text-sm">{props.heading3}</strong>
            <p className="mb-5 text-gray-700">{props.para4}</p>
          </div>
        )}
      </div>
    </div>
  );
}
