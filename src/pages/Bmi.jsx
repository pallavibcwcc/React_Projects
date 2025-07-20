import { useMemo, useState } from "react"; // 🎯 React Hooks
import "../Styles/Bmi.css"; // 🎨 External CSS for styling

const Bmi = () => {
  // 📏 State to store height in cm (default is 180cm)
  const [height, setHeight] = useState(180);

  // ⚖️ State to store weight in kg (default is 70kg)
  const [weight, setWeight] = useState(70);

  // ➕ Handle changes in weight slider
  function onWeightchange(e) {
    setWeight(e.target.value);
  }

  // ➖ Handle changes in height slider
  function onHeightchange(e) {
    setHeight(e.target.value);
  }

  // 🧠 useMemo to optimize BMI calculation
  // 📉 It recalculates only when height or weight changes
  const output = useMemo(() => {
    const calculateHeight = height / 100; // 📏 Convert height from cm to meters
    return (weight / (calculateHeight * calculateHeight)).toFixed(2); // ✅ BMI formula
  }, [weight, height]);

  return (
    <div>
      {/* 🎨 Background styling div */}
      <div className="Bg-bmi"></div>

      {/* 🧱 Main content section */}
      <main className="main" id="main">
        {/* 🏷️ Heading */}
        <div className="bmi-heading">
          <h1>BMI CALCULATOR</h1>
        </div>

        {/* ⚙️ Inputs for weight and height */}
        <div className="input-section">
          {/* ⚖️ Display current weight */}
          <p className="input-section" style={{ fontSize: "2rem" }}>
            Weight {weight} kg
          </p>

          {/* 🎚️ Slider for weight input */}
          <input
            className="input-slider"
            id="acent"
            type="range"
            step="1"
            min="40"
            max="200"
            onChange={onWeightchange}
          />

          {/* 📏 Display current height */}
          <p className="input-section" style={{ fontSize: "2rem" }}>
            Height {height} cm
          </p>

          {/* 🎚️ Slider for height input */}
          <input
            className="input-slider"
            id="acent"
            type="range"
            min="140"
            max="220"
            onChange={onHeightchange}
          />
        </div>

        {/* 📊 Output BMI result */}
        <div className="output-section">
          <p style={{ fontSize: "2rem" }}>Your BMI is:</p>
          <p className="output">{output}</p>
        </div>
      </main>
    </div>
  );
};

export default Bmi;
