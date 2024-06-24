import React, { useEffect, useState } from "react";

type RadioButtonGroupProps = {
  options: string[];
  name: string;
  onChange: (selectedOption: string) => void;
  initialOption: string;
};

const RadioButtonGroup = ({
  options,
  name,
  onChange,
  initialOption,
}: RadioButtonGroupProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.value;
    setSelectedOption(selected);
    onChange(selected); // 선택된 옵션을 한 개의 인자로 전달
  };

  useEffect(() => {
    setSelectedOption(initialOption); // props로 전달된 초기 선택 옵션 업데이트
  }, [initialOption]);

  return (
    <div style={{ display: "flex" }}>
      {options.map((option) => (
        <div key={option} style={{ marginRight: "20px" }}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
            style={{ marginRight: "5px" }}
          />
          {option}
        </div>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
