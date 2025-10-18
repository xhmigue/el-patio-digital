import { MenuItem } from "@/types/menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MenuModalProps {
  item: MenuItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MenuModal = ({ item, open, onOpenChange }: MenuModalProps) => {
  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground">
            {item.name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {item.image && (
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-primary">{item.price}</span>
            </div>
            {item.description && (
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-foreground">Descripción</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
