import CharactersImage from "@/assets/Characters.png";

interface CharactersProps {
  size?: number | string;
}

const Characters = (props: CharactersProps) => {
  const { size = 257 } = props;
  return (
    <div className="flex justify-center">
      <img
        src={CharactersImage}
        width={size}
        loading="lazy"
        alt="캐릭터 로고"
      />
    </div>
  );
};

export default Characters;
