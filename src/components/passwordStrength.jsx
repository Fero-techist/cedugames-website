function PasswordStrength() {
  return (
    <div className="flex items-center gap-2 mt-2">
      <div className="flex gap-1 w-full">
        <div className="h-1 flex-1 bg-purple-500 rounded"></div>
        <div className="h-1 flex-1 bg-purple-400 rounded"></div>
        <div className="h-1 flex-1 bg-gray-200 rounded"></div>
        <div className="h-1 flex-1 bg-gray-200 rounded"></div>
      </div>

      <span className="text-xs text-purple-500 font-medium">MEDIUM</span>
    </div>
  );
}

export default PasswordStrength;
