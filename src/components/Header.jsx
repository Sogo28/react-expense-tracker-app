import React from "react";

export default function Header({ title }) {
  return (
    <>
      <h1 className="text-2xl text-center mb-8 font-medium">{title}</h1>
    </>
  );
}
