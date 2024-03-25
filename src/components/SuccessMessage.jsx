import React from 'react';

const SuccessMessage = () => {
  return (
    <div>
      <p>Thanks for subscribing!</p>
      <p>A confirmation email has been sent. Please check your inbox.</p>
      <button onClick={() => window.location.reload()}>Dismiss message</button>
    </div>
  );
};

export default SuccessMessage;
