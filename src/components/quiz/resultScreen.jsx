function ResultScreen({ score, total }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-3xl font-bold">Quiz Completed 🎉</h1>
      <p className="mt-4 text-xl">
        Your Score: {score} / {total}
      </p>
    </div>
  );
}
export default ResultScreen;
