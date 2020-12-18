import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/counter/counterActions';
import styles from './Counter.module.css';

function Counter({ value, step, onInc, onDec }) {
  return (
    <>
      <div className={styles.counter}>
        <button type="button" onClick={() => onInc(step)}>
          increment on {step}
        </button>
        <button type="button" onClick={() => onDec(step)}>
          decrement on {step}
        </button>
        <p>
          Count <span>{value}</span>
        </p>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = (dispatch) => ({
  onInc: (value) => dispatch(actions.inc(value)),
  onDec: (value) => dispatch(actions.dec(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
