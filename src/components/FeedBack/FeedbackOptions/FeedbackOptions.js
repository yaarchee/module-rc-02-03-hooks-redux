import React from "react";
import Button from "./Button/Button";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {Object.keys(options).map((key) => (
        <Button grade={key} onLeaveFeedback={onLeaveFeedback} key={key} />
      ))}
    </div>
  );
}
