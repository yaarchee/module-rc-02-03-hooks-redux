import React, { useReducer } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Sections from '../Sections/Sections';
import Notification from '../Notification/Notification';
import feedBackReducer from '../reducer';
import feadBackAction from '../action';

function FeedBack() {
  const [state, dispatch] = useReducer(feedBackReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
    top: 0,
  });

  const onLeaveFeedback = (gradeFeedBack) => {
    dispatch(feadBackAction(gradeFeedBack));
  };

  const onTotalStatCount = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  const positivePercentage = () => {
    return ((state.good / onTotalStatCount()) * 100).toFixed(2);
  };

  const onStatistics = () => {
    return Object.entries(state);
  };

  return (
    <div className="feedBack">
      <Sections>
        <h2>Please leave feedback</h2>
        <FeedbackOptions options={state} onLeaveFeedback={onLeaveFeedback} />
      </Sections>

      <Sections>
        <h2>Statistics:</h2>
        {onTotalStatCount() ? (
          <Statistics
            statistics={onStatistics()}
            total={onTotalStatCount()}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Sections>
    </div>
  );
}
export default FeedBack;
