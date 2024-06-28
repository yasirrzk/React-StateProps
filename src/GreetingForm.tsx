import React, { useState } from "react";

const GreetingForm: React.FC = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGreeting(`Hello, ${name}!`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            className="bg-blue-500 px-4 py-2 mr-6 rounded font-bold text-yellow-300"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 rounded text-yellow-300"
        >
          Greet
        </button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default GreetingForm;
