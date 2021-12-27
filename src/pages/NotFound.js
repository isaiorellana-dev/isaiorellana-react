import React from "react";
import useDocumentTitle from "@hooks/useDocumentTitle";

const NotFound = () => {
  useDocumentTitle("Error 404");
  return (
    <React.Fragment>
      <h1>Error 404</h1>
    </React.Fragment>
  );
};

export default NotFound;
