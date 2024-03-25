import React, { useState } from 'react';
import SuccessMessage from './SuccessMessage';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your subscription logic here
    setSubscribed(true);
  };

  return (
    <div>
      {!subscribed ? (
        <form onSubmit={handleSubscribe}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      ) : (
        <SuccessMessage />
      )}
    </div>
  );
};

export default NewsletterForm;
