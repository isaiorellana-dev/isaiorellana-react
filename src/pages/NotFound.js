import React from "react";
import useDocumentTitle from "@hooks/useDocumentTitle";

const NotFound = () => {
  useDocumentTitle("Error 404");
  return <div>No encontrado, error 404.</div>;
};

export default NotFound;
