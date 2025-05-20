

const Sidebar = ({ onCategorySelect, selectedCategory }) => {
  const categories = ["Rocking Chair", "Side Chair", "Lounge Chair"];

  return (
    <div className="flex flex-col gap-5 mt-20 ml-10 text-xl font-bold">
      {categories.map((category) => (
        <h1
          key={category}
          onClick={() => onCategorySelect(category)}
          className={`cursor-pointer ${
            selectedCategory === category
              ? "text-white bg-gray-800 p-2 rounded" 
              : "text-gray-700"
          }`}
        >
          {category}
        </h1>
      ))}
    </div>
  );
};

export default Sidebar;