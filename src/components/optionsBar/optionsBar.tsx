import React from "react";

interface OptionsBarProps {
  options: {
    name: string;
    description: string;
  }[];
  setSelectedOption: React.Dispatch<React.SetStateAction<number>>;
  selectedOption: number;
}

const OptionsBar: React.FC<OptionsBarProps> = ({ options, setSelectedOption, selectedOption }) => {
  return (
    <div className="w-screen flex relative h-[100px] overflow-x-hidden border-blue-100 border-b-4 max-w-[1000px] ml-auto mr-auto">
      <div className="w-screen overflow-scroll relative">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => setSelectedOption(index)}
            className={`bg-[#F8F8F8] bg-gradient-to-b from-light-blue to-light-blue text-black w-[33vw] ml-auto mr-auto max-w-[250px] h-[80px] min-w-[150px] absolute hover:bg-gray-100 transition-colors ${index === selectedOption ? 'border-indigo-800 border-b-4' : ''}`}
            style={{ transform: `translateX(${index * 100}%)` }}
          >
            <h2
              className=""
              style={{
                fontWeight: selectedOption === index ? 'bold' : '500',
                transition: 'font-weight 0.3s ease-in'
              }}
            >
              {option.name}
            </h2>
            <p
              style={{
                fontWeight: selectedOption === index ? 'bold' : '500',
                transition: 'font-weight 0.3s ease-in'
              }}
            >
              {option.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionsBar;
