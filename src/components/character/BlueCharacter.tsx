import BlueCharacterImage from "@/assets/BlueCharacter.png";

interface BlueCharacterProps {
  size?: number | string;
}

const BlueCharacter = (props: BlueCharacterProps) => {
  const { size = 171 } = props;
  return (
    <div className="flex justify-center">
      <img
        src={BlueCharacterImage}
        width={size}
        loading="lazy"
        alt="캐릭터 로고"
      />
    </div>
  );
};

export default BlueCharacter;
