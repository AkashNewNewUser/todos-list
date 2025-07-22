import React, { useState } from 'react';

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)} 
        />
        Check me!
      </label>
      <p>{isChecked ? "Checked!" : "Not Checked"}</p>
    </div>
  );
}
export default CheckboxExample();