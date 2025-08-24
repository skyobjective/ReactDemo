import React from 'react';
import Card from './card';
import './ConfirmModel.css';

const ConfirmModel = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onCancel} />
      <Card className="confirm-model">
        <h2>Are you sure?</h2>
        <p>Do you want to continue this operation?</p>
        <div className="confirm-model-actions">
          <button onClick={props.onCancel}>Cancel</button>
          <button onClick={props.onConfirm}>Confirm</button>
        </div>
      </Card>
    </div>
  );
};

export default ConfirmModel;
