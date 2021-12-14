import { React, useEffect } from "react";

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    console.log("Hi, what r u doing here?");
  }, [title]);
}

export default useDocumentTitle;
