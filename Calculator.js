import React, { useState } from "react";
import axios from "axios";
function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState("add");
    const [result, setResult] = useState(null);
    const calculate = async () => {
        try {
            const BASE_URL = "http://localhost:8080/api";

            let response;
            switch (operation) {
                case "add":
                    response = await fetch(`${BASE_URL}/sum/${num1}/${num2}`);
                    break;
                case "subtract":
                    response = await fetch(`${BASE_URL}/sub/${num1}/${num2}`);
                    break;
                case "multiply":
                    response = await fetch(`${BASE_URL}/mul/${num1}/${num2}`);
                    break;
                case "divide":
                    response = await fetch(`${BASE_URL}/div/${num1}/${num2}`);
                    break;
                default:
                    throw new Error("Invalid operation");
            }

            const data = await response.text();
            setResult(data);
        } catch (err) {
            alert("Error: " + err.message);
        }
    };
    
    return (
        <div className="bg-white shadow-xl p-8 rounded-2xl w-96">
            <h1 className="text-2xl font-bold text-center mb-6">Calculator</h1>
            <input
                type="number"
                placeholder="Enter number 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                className="w-full p-2 border rounded mb-3"
            />
            <input
                type="number"
                placeholder="Enter number 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                className="w-full p-2 border rounded mb-3"
            />
            <select
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
                className="w-full p-2 border rounded mb-3"
            >
                <option value="add">Add (+)</option>
                <option value="subtract">Subtract (-)</option>
                <option value="multiply">Multiply (×)</option>
                <option value="divide">Divide (÷)</option>
            </select>
            <button
                onClick={calculate}
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
                Calculate
            </button>
            {result !== null && (
                <div className="mt-4 text-center text-lg font-semibold">
                    Result: {result}
                </div>
            )}
        </div>
    );
}
export default Calculator;
