"use client";
import { useState } from "react";

export default function Page() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res;

    if (operator === "+") res = n1 + n2;
    else if (operator === "-") res = n1 - n2;
    else if (operator === "*") res = n1 * n2;
    else if (operator === "/") res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";

    setResult(res);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 text-center">
        <h1 className="text-2xl font-bold mb-6 text-indigo-600">Calculator</h1>

        <input
          type="number"
          placeholder="First Number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="w-full border p-2 text-black rounded mb-3"
        />

        <input
          type="number"
          placeholder="Second Number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="w-full border p-2 text-black rounded mb-3"
        />

        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="w-full border border-black text-black p-2 rounded mb-4"
        >
          <option value="+">Addition (+)</option>
          <option value="-">Subtraction (-)</option>
          <option value="*">Multiplication (*)</option>
          <option value="/">Division (/)</option>
        </select>

        <button
          onClick={calculate}
          className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600"
        >
          Result
        </button>

        {result !== null && (
          <p className="mt-4 text-lg font-semibold text-green-600">
            Result: {result}
          </p>
        )}
      </div>
    </div>
  );
}