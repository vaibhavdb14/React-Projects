import { useState } from "react";
import "./PasswordChecker.css";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // helper checks
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);
  const isLongEnough = password.length >= 8;

  // derive strength
  let strength = "Weak";
  let strengthClass = "weak";

  if (isLongEnough && hasNumber && hasSpecialChar) {
    strength = "Strong";
    strengthClass = "strong";
  } else if (isLongEnough && (hasNumber || hasSpecialChar)) {
    strength = "Medium";
    strengthClass = "medium";
  }

  return (
    <div className="password-container">
      <h2>Password Strength Checker</h2>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="password-input"
      />

      {/* Show password checkbox */}
      <label className="show-password">
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        Show password
      </label>

      <p className="strength-text">
        Strength: <strong className={strengthClass}>{strength}</strong>
      </p>

      <ul className="rules">
        <li className={isLongEnough ? "valid" : "invalid"}>
          At least 8 characters
        </li>
        <li className={hasNumber ? "valid" : "invalid"}>
          Contains a number
        </li>
        <li className={hasSpecialChar ? "valid" : "invalid"}>
          Contains a special character
        </li>
      </ul>
    </div>
  );
};

export default PasswordChecker;
