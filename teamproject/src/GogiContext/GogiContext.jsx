import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Context 생성
const GogiContext = createContext();

export const GogiProvider = ({ children }) => {
  const [gogiData, setGogiData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/gogiInfo")
      .then((response) => {
        setGogiData(response.data.gogiInfo);
      })
      .catch((error) => {
        console.error("데이터 불러오기 실패:", error);
      });
  }, []);

  return (
    <GogiContext.Provider value={{ gogiData }}>
      {children}
    </GogiContext.Provider>
  );
};

export default GogiContext;
