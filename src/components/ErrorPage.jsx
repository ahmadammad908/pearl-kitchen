import React from "react";

import { BiError } from "react-icons/bi";

export default function ErrorPage() {
  return (
    <>
      <div
        style={{
          fontSize: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BiError />
        Error (Page Not Found)
      </div>
    </>
  );
}
