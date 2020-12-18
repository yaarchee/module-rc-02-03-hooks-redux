import React from "react";
import style from "../FeedbackOptions.module.css";

export default function Button({ grade, onLeaveFeedback }) {
  return (
    <button
      type="button"
      onClick={() => onLeaveFeedback(grade)}
      className={style.buttonGrade}
    >
      {grade}
    </button>
  );
}
