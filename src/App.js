import { useState } from "react";

const questions = [
  //   Year, make, model, VIN, License #
  ["car", "What do you drive? (year, make, model, VIN, or License Plate/State)",],
  //   Mileage
  ["odometer", "How many miles are on your car?",],
  // Title Status, Condition (Poor, Fair, Good, Excellent), modifications?
  ["title", "Title, modifications, condition, etc ",],
  // Own, finance, lease
  ["ownership", "Do you finance, own, or lease?",],
  // $ amount"
  ["payment", "What is your current payment per month?",],
  //   Months, years
  ["longer", "How much longer on the lease or loan?",],
  // % number"
  ["interest", "Interest on loan?",],
  // More lease stuff? (Need to do research)
  //   $ amount
  ["insurance", "How much is your insurance on the car?",],
  //   miles
  ["miles", "How many miles do you drive each year? ",],
  //   Zip code"
  ["zip", "What is your zip code?",],
  //   Months / Year "until they die"
  ["last", "How long do you typically keep cars?",],
];





export default function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleChange = (e) => {
    const newAnswers = {...answers};
    newAnswers[questions[step][0]] = e.target.value;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => setStep(step + 1);
  const restart = () => {
    setStep(0);
    setAnswers({});
  };

  const get_summary = () => (
    `You currently drive a ${answers.car} with ${answers.odometer} miles and has a ${answers.title}
    title on it. You drive about ${answers.miles} miles / year, and typically keep a car for about
    ${answers.last} years. You have a loan on it with a remaining balance of ${answers.payment},
    with ${answers.longer} years to go with an interest rate of ${answers.interest}. Your monthly
    payments are ${answers.payment} for the loan, ${answers.insurance}, and ${"who knows how much"}
    for gas. You live in ${answers.zip}. You own your var via ${answers.ownership}.
    `
  )

  return (
    <div className="flex flex-col items-center p-4">
      {step < questions.length ? (
        <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-4">{questions[step][1]}</h2>
          <input
            type="text"
            value={answers[questions[step][0]] || ""}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            onClick={nextQuestion}
            className="mt-4 p-2 bg-blue-500 text-white rounded w-full"
            disabled={!answers[questions[step][0]]}
          >
            Next
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Summary:</h2>
          <p className="mb-4">{get_summary()}</p>
          <button
            onClick={restart}
            className="p-2 bg-green-500 text-white rounded w-full"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}
