import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function RegistrationForm() {
  const { register, handleSubmit, watch } = useForm();
  const [step, setStep] = useState(1);
  const [enteredCode, setEnteredCode] = useState("");
  const [formData, setFormData] = useState({}); // для збереження всіх даних
  const navigate = useNavigate();

  const phoneNumber = watch("phoneNumber", "");
  const confirmationCode = "1234";

  const handleSendCode = () => {
    if (phoneNumber.length === 10) setStep(2);
  };

  const handleConfirmCode = () => {
    if (enteredCode === confirmationCode) {
      setStep(3);
    }
  };

  const handleEditPhone = () => {
    setStep(1);
    setEnteredCode("");
  };

  const onSubmit = (data) => {
    const updatedData = { ...formData, ...data }; // об'єднуємо всі введені дані
    setFormData(updatedData);
    console.log("Registration Data:", updatedData); // Виводимо в консоль
    navigate("/profile-info", { state: updatedData });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="logo">COMPANY NAME</div>
        <div className="steps">
          <span className={step >= 1 ? "active" : ""}></span>
          <span className={step >= 2 ? "active" : ""}></span>
          <span className={step >= 3 ? "active" : ""}></span>
        </div>
      </div>

      <div className="form-container">
        <h2>Registration</h2>
        <p>Fill in the registration data. It will take a couple of minutes.</p>

        {step === 1 && (
          <div>
            <label>Enter your phone number</label>
            <div className="phone-input">
              <select {...register("countryCode")}>
                <option value="+1">+1</option>
                <option value="+380">+380</option>
              </select>
              <input
                {...register("phoneNumber", { maxLength: 10 })}
                placeholder="555-5515-234"
                maxLength="10"
              />
            </div>
            <button onClick={handleSendCode} disabled={phoneNumber.length !== 10}>
              Send Code
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="phone-status not-confirmed">
              <span>{watch("countryCode", "")} {phoneNumber}</span>
              <span className="status-icon">❌ Number not confirmed yet</span>
            </div>

            <label>Enter confirmation code</label>
            <input
              type="text"
              value={enteredCode}
              onChange={(e) => setEnteredCode(e.target.value)}
              maxLength="4"
            />
            <p className="edit-phone" onClick={handleEditPhone}>
              Edit phone number
            </p>
            <button onClick={handleConfirmCode}>Confirm</button>
            <p className="resend-code">Send again</p>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="phone-status confirmed">
              <span>{watch("countryCode", "")} {phoneNumber}</span>
              <span className="status-icon">✅ Number confirmed</span>
            </div>

            <label>Email</label>
            <input {...register("email")} type="email" placeholder="you@example.com" />

            <label>Password</label>
            <input {...register("password")} type="password" placeholder="*******" />

            <button type="submit">Register Now</button>
          </form>
        )}
      </div>
    </div>
  );
}