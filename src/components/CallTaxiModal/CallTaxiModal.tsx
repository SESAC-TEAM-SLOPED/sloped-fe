type Props = {
  callTaxiModalOpen: boolean;
  stateChange: (state: boolean) => void;
};

const CallTaxiModal = ({ callTaxiModalOpen, stateChange }: Props) => {
  const handleCallTaxi = () => {
    stateChange(!callTaxiModalOpen);
  };
  return <div onClick={handleCallTaxi}>hello</div>;
};

export default CallTaxiModal;
