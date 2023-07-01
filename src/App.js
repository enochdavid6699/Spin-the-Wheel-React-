import './App.css';
import { useState } from 'react';
import Wheel from './wheel';
import Prize from './prize';

function App() {

  const [spinCount, setSpinCount] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [coupon, setCoupon] = useState('');

  const spinWheel = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      setSpinCount(spinCount + 1);
  
      const rotationDuration = Math.floor(Math.random() * 3000) + 2000; // Random duration between 2000 and 5000 milliseconds
      const currentRotationAngle = spinCount * 360; // Assuming 1 spin = 360 degrees
      const finalRotationAngle = currentRotationAngle + Math.floor(Math.random() * 360) + 720; // Random angle between 720 and 1080 degrees

      const wheelElement = document.querySelector('.wheel');
      wheelElement.style.transition = `transform ${rotationDuration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
      wheelElement.style.transform = `rotate(${finalRotationAngle}deg)`;
  
      setTimeout(() => {
        setIsSpinning(false);
  
        let prize = '';
        if (spinCount === 0) {
          prize = 'Try Again';
        } else if (spinCount === 1) {
          prize = 'Gift Card';
        }
  
        setCoupon(prize);
      }, rotationDuration);
    }
  };
  

  return (
    <div className="App">
      <div className="coupon-wheel">
        <Wheel isSpinning={isSpinning} spinCount={spinCount} setCoupon={setCoupon} spinWheel={spinWheel} />

        <Prize coupon={coupon} />
      </div>
    </div>
  );

}

export default App;
