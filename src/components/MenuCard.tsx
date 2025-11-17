import { MenuItem } from "@/types/menu";
import { Card, CardContent } from "@/components/ui/card";

interface MenuCardProps {
  item: MenuItem;
  onClick: () => void;
}

export const MenuCard = ({ item, onClick }: MenuCardProps) => {
  return (
    <Card
      className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl bg-card border-border overflow-hidden group"
      onClick={onClick}
    >
      {item.image && (
        <div className="relative h-48 overflow-hidden">
          {item.isVisible === false ? (
            ""
          ) : (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-1">
              {item.name} <i>{item.subtitle ? item.subtitle : ""}</i>
            </h3>
            <p className="text-2xl font-bold text-primary">{item.price}</p>
          </div>
        </div>
      )}
      <CardContent
        className={
          item.description
            ? item.image
              ? "p-4"
              : "p-2"
            : item.image
            ? "p-0"
            : "p-2"
        }
      >
        {!item.image && (
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-foreground">
              {item.name} {item.subtitle ? <i>{item.subtitle!}</i> : ""}
            </h3>
            <span className="text-xl font-bold text-primary ml-4">
              {item.price}
            </span>
          </div>
        )}
        {item.description && (
          <p className="text-sm text-muted-foreground">{item.description}</p>
        )}
      </CardContent>
    </Card>
  );
};
