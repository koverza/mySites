import React, { useState } from "react";
import Input from "../../../../common/Input/Input";

const Duration = () => {
  // Duration input
  const [duration, setDuration] = useState("");

  // Duration function 
  function durationTime() {
    if (Number(duration)) {
      let hours = Math.floor(duration / 60);
      hours += hours < 0 ? 1 : 0;
      let m2 = Math.abs(duration % 60);
      m2 = m2 < 10 ? "0" + m2 : m2;
      return hours + ":" + m2;
    } else if (String(duration)) {
      return "00:00";
    } else {
      return "00:00";
    }
  }
  return (
    <div>
      <div className="duration-block">
        <h2 className="duration-block__title">Duration</h2>
        <div className="duration-left__block">
          <p className="duration-left__title title">Duration</p>
          <Input
            value={duration}
            type="text"
            className="input"
            onChange={(event) => setDuration(event.target.value)}
          />
        </div>
      </div>
      <div className="duration">
        <span className="duration-title">Duration</span>
        <div>
          <span className="duration-result">{durationTime()}</span>hours
        </div>
      </div>
    </div>
  );
};

export default Duration;
