import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import { useState } from "react";

Header;

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => {
      let updatedValue = newValue.trim(); // Remove leading and trailing spaces

      // Check if the input is not empty and does not start with "0"
      if (updatedValue !== "" && !updatedValue.startsWith("0")) {
        updatedValue = updatedValue.replace(/^0+/, ""); // Remove leading zeros
      }

      return {
        ...prevState,
        [inputIdentifier]: parseInt(updatedValue),
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput inputs={userInput} onChange={handleChange} />
      <Results inputs={userInput} />
    </>
  );
}

export default App;
