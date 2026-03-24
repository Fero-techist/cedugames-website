const QuestionCard = ({ question }) => {
  return (
    <div className="mt-6 mx-auto w-full max-w-2xl bg-[#F4F4F4] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-6 flex items-center gap-4 relative">
      <img
        src={question.image}
        className="w-80 object-contain"
      />

      <div className="flex-1 text-center">
        <p className="text-2xl font-medium text-gray-700 leading-snug">
          {question.text}
        </p>
      </div>

      {question.shape && (
        <img
          src={question.shape}
          className="w-20"
        />
      )}
    </div>
  );
};
export default QuestionCard;
