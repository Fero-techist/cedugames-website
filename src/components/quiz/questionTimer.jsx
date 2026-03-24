export default function QuestionTimer({ timeout, onTimeout }) {
  setTimeout(() => {
    onTimeout();
  }, timeout);

  return (
    <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
      <div
        className="h-full bg-green-500 transition-all duration-1000 ease-in-out"
        style={{ width: `${timeout}%` }}
      ></div>
    </div>
  );
}
