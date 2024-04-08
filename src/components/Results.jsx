import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ inputs }) {
  let results = calculateInvestmentResults(inputs);

  // Check if results is undefined or empty before accessing properties
  if (!results || results.length === 0 || inputs.length === 0) {
    return <div id="error">No results available</div>;
  }

  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearDate) => {
          const totalInterestValue =
            yearDate.valueEndOfYear -
            yearDate.annualInvestment * yearDate.year -
            initialInvestment;

          const totalInvested = yearDate.valueEndOfYear - totalInterestValue;

          return (
            <tr key={yearDate.year}>
              <td>{yearDate.year}</td>
              <td>{formatter.format(yearDate.valueEndOfYear)}</td>
              <td>{formatter.format(yearDate.interest)}</td>
              <td>{formatter.format(totalInterestValue)}</td>
              <td>{formatter.format(totalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
