interface ClasComponentProps {
  title: string;
}

const ClassComponent = (props: ClasComponentProps) => {
  const { title } = props;

  return (
    <div className="flex w-fit items-center justify-center rounded-[36px] border border-brand bg-white px-2.5 py-[1.5px] text-[13px] font-semibold text-brand">
      {title}
    </div>
  );
};

export default ClassComponent;
