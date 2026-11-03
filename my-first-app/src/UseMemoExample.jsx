import React, { useMemo, useState, useEffect } from 'react';

const UseMemoExample = () => {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  // Memoized to prevent running slowFunction on theme changes
  const DoubleNum = useMemo(() => {
    return slowFunction(num);
  }, [num]);

  // Memoized to prevent structural inequality re-renders/effects
  const themeObj = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      padding: "20px",
      marginTop: "10px"
    };
  }, [dark]);

  const changeTheme = () => {
    setDark(prevDark => !prevDark); // Best practice for state updates relying on previous state
  };

  return (
    <div>
      <h1>Use Memo Example</h1>
      <div>
        <input 
          type='number' 
          id="number" 
          name="number" 
          value={num} 
          onChange={(e) => setNum(Number(e.target.value))} 
        />
      </div>
      <div>
        {/* FIXED: Directly passing the function reference */}
        <button onClick={changeTheme}>Change Theme</button>
      </div> 
      <div style={themeObj}>{DoubleNum}</div>
    </div>
  );
};

const slowFunction = (num) => {
  for (let i = 0; i < 100000000; i++) {} // Artificial delay
  console.log("slow function running");
  return 2 * num;
};

export default UseMemoExample;
