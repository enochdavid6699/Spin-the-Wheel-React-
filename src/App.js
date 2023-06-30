import React, { useState } from 'react';
import './App.css';

function App() {
  const [spinCount, setSpinCount] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [coupon, setCoupon] = useState('');

  const spinWheel = () => {
    // Only allow spinning when not already spinning
    if (!isSpinning) {
      setIsSpinning(true);
      setSpinCount(spinCount + 1);

      // Simulate wheel spinning for 2 seconds
      setTimeout(() => {
        setIsSpinning(false);
        
        // Determine the coupon prize based on spin count
        let prize = '';
        if (spinCount === 1) {
          prize = 'Try Again';
        } else if (spinCount === 2) {
          prize = 'Gift Card';
        }

        setCoupon(prize);
      }, 2000);
    }
  };

  return (
    <div className="App">
      <div className="coupon-wheel">
        <div
          className={`wheel ${isSpinning ? 'spinning' : ''}`}
          onClick={spinWheel}
        >
          Spin the Wheel
        </div>
        <div className="coupon-prize">{coupon}</div>
      </div>
    </div>
  );
}

export default App;
