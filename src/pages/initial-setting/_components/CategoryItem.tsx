import { Button } from "@ui/components/ui/button";
import { cn } from "@ui/lib/utils";

interface CategoryItemProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryItem = (props: CategoryItemProps) => {
  const { title, isSelected, onClick } = props;

  return (
    <Button
      variant={isSelected ? "category_brand" : "category_outline"}
      className={cn("h-10 w-full text-base")}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default CategoryItem;
