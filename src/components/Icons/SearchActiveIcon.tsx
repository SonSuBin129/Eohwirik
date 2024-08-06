import SearchIconActiveImage from "@/assets/SearchIconActive.png";

interface SearchProps {
  onClick?: () => void;
}

const SearchActiveIcon = (props: SearchProps) => {
  const { onClick } = props;
  return (
    <div className="flex items-center justify-center" onClick={onClick}>
      <img
        src={SearchIconActiveImage}
        className="h-5 w-auto"
        loading="lazy"
        alt="SearchIcon"
      />
    </div>
  );
};

export default SearchActiveIcon;
