import SearchIconImage from "@/assets/SearchIconImage.png";

const SearchIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={SearchIconImage}
        className="h-6 w-auto"
        loading="lazy"
        alt="SearchIcon"
      />
    </div>
  );
};

export default SearchIcon;
