const OptionsGrid = ({ options, onSelect }) => {
  return (
    <div className=" max-w-3xl mx-auto">
      <h1 className=" my-4 text-xl text-black">Select Option</h1>
      <ul className="grid grid-cols-2 gap-6 mt-6">
        {options.map((option, index) => (
          <li
            key={index}
            className={`${option.bg} rounded-2xl`}
          >
            <button
              onClick={() => onSelect(option)}
              className="w-[300px] p-6 flex justify-center items-center"
            >
              <img
                src={option.image}
                alt="option"
                className="w-40 object-contain"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionsGrid;
