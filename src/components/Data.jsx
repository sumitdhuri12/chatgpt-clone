import axios from "axios";
import React, { useEffect } from "react";

const Data = () => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res));
  }, []);

  return <div>Data</div>;
};

export default Data;
