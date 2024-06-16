type FacilityCategoryProps = {
  category: string;
};

const FacilityCategory = ({ category }: FacilityCategoryProps) => (
  <p className="text-sm text-gray-500">{category}</p>
);

export default FacilityCategory;
