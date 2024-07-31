interface NumberIconProps {
  number: number;
}

const NumberIcon = (props: NumberIconProps) => {
  const { number } = props;
  return (
    <div className="p-auto h-7 w-7 rounded-full bg-brand pt-px text-center text-xl font-black text-white">
      {number}
    </div>
  );
};

export default NumberIcon;
