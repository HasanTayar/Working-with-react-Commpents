import { useState } from "react";

export default function Q1Input() {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        type="range"
        id="input"
        defaultValue={0}
        maxLength={100}
        onChange={handleChange}
      />
      <p>Your Answer is: {value}</p>
    </div>
  );
}
