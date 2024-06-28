import React, { useState } from 'react';

interface GreetingProps {
  initialName: string;
}

const Greeting: React.FC<GreetingProps> = ({ initialName }) => {
  const [name, setName] = useState(initialName);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      {/* <h1>Hello, {name}!</h1> */}
      <input 
        type="text" 
        value={name} 
        onChange={handleChange} 
      />
    </div>
  );
};

export default Greeting;