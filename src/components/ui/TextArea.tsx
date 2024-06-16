type Props = {
  height: string;
  placeholder: string;
  onTextChange: (text: string) => void;
};

const Textarea = ({ height = "200px", placeholder, onTextChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange(event.target.value);
  };

  return (
    <div className="w-full">
      <textarea
        className="w-full border-2 border-blue-200 rounded-lg p-4 placeholder-gray-400 resize-none"
        style={{ height }}
        placeholder={placeholder}
        maxLength={1000}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
