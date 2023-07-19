import React, { useState } from "react";
export const formContext = React.createContext({});

export default function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    user: "defaulemail@cdtcreatic.com",
    password: "12345",
  });

  console.log(formData);
  return (
    <formContext.Provider value={[formData, setFormData]}>
      {children}
    </formContext.Provider>
  );
}
