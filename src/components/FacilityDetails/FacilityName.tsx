type FacilityNameProps = {
  name: string;
};

const FacilityName = ({ name }: FacilityNameProps) => (
  <h1 className="text-[#404040] text-xl font-bold">{name}</h1>
);

export default FacilityName;
