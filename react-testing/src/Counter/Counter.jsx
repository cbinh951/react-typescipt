import React, { useState } from 'react';

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addToCounter = () => {
    setCounterValue(counterValue + inputValue);
  };

  const subtractCounter = () => {
    setCounterValue(counterValue - inputValue);
  };
  return (
    <div>
      <h3 data-testid="header ">My Counter</h3>
      <h2
        data-testid="counter"
        className={`${counterValue >= 100 ? 'green' : ''}`}
      >
        {counterValue}
      </h2>
      <input
        data-testid="input"
        type="number"
        value={inputValue}
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
      />
      <button data-testid="subtract-btn" onClick={subtractCounter}>
        -
      </button>
      <button data-testid="add-btn" onClick={addToCounter}>
        +
      </button>
    </div>
  );
};

export default Counter;
