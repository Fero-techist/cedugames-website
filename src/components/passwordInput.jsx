import { useState } from "react";

function PasswordInput({ label, placeholder }) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full space-y-2">
      <label className="text-sm text-gray-700">{label}</label>

      <div className="flex items-center border w-full border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl px-6 py-3 outline-none focus:ring-2 focus:ring-purple-400">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className="w-full  bg-transparent outline-none text-sm"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="text-gray-400"
        >
          👁
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;
