import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") || "";
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiClient.verifyEmail({ email, otp });
      showToast({ message: "Email verified successfully", type: "SUCCESS" });
      navigate("/"); 
    } catch (err) {
        if (err instanceof Error) {
            showToast({ message: err.message || "Invalid OTP", type: "ERROR" });
          } else {
            showToast({ message: "Something went wrong", type: "ERROR" });
          }
    }
  };

  const resendotp = async(e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await apiClient.resendOtp({ email, otp });
      showToast({ message: "OTP resent successfully", type: "SUCCESS" });
    } catch (err) {
        if (err instanceof Error) {
            showToast({ message: err.message || "Error resending OTP", type: "ERROR" });
          } else {
            showToast({ message: "Something went wrong", type: "ERROR" });
          }
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleVerify}>
      <h2 className="text-2xl font-bold">Verify Your Email</h2>
      <p>Enter the OTP sent to your email: <strong>{email}</strong></p>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border rounded py-2 px-3"
        placeholder="Enter OTP"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500"
      >
        Verify
      </button>
      <button  type="submit"
        className="bg-gray-600 text-white p-2 font-bold hover:bg-gray-500" onClick={resendotp}>
        Resend OTP</button>

    </form>
  );
};


export default VerifyOtp;
