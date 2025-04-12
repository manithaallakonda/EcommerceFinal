import React, { useState } from 'react';
import './Checkout.css';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import ConfirmationStep from './ConfirmationStep';
import Summary from './Summary';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', address: '', city: '', zip: '',
    cardNumber: '', expiry: '', cvv: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="checkout-container">
      <div className="step-indicator">
        <div className={step >= 1 ? "active" : ""}>1. Address</div>
        <div className={step >= 2 ? "active" : ""}>2. Payment</div>
        <div className={step >= 3 ? "active" : ""}>3. Confirm</div>
        <div className={step >= 4 ? "active" : ""}>4. Summary</div>
      </div>

      {step === 1 && <AddressForm next={nextStep} handleChange={handleChange} formData={formData} />}
      {step === 2 && <PaymentForm next={nextStep} prev={prevStep} handleChange={handleChange} formData={formData} />}
      {step === 3 && <ConfirmationStep next={nextStep} prev={prevStep} formData={formData} />}
      {step === 4 && <Summary formData={formData} />}
    </div>
  );
};

export default Checkout;
