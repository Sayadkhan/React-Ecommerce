const Category = ({ categories }) => {
  return (
    <div className="h-1/2 w-80 shadow-md shadow-orange-200 p-5">
      <div className="flex flex-col">
        {categories.map((category) => (
          <div
            className="border-b-2 p-1 hover:translate-x-5 hover:border-orange-400 duration-300"
            key={category.id}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
