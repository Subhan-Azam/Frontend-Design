import React from "react";

export default function NavButton(props) {
  return (
    <div>
      <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 bg-red-600 px-5 py-2 text-white rounded-lg">
        {props.title}
      </button>
    </div>
  );
}
