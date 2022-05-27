import React from "react";
import { useNavigate } from "react-router-dom";

const ArrowBack = () => {
  const navigate = useNavigate();

  function back() {
    navigate("/courses");
  }

  return (
    <div>
      <button className="back" onClick={back}>
        &lt; Back to courses
      </button>
    </div>
  );
};

export default ArrowBack;
