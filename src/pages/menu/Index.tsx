import { useState } from "react";
import { MenuItem } from "@/types/menu";
import { menuCategories } from "@/data/menuData";
import { MenuCard } from "@/components/MenuCard";
import { MenuModal } from "@/components/MenuModal";
import { Beer } from "lucide-react";

const Index = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <Beer className="w-8 h-8 text-primary" />
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground tracking-tight">
                BELL'S
              </h1>
              <p className="text-sm text-muted-foreground mt-1">Desde 1979</p>
            </div>
            <Beer className="w-8 h-8 text-primary" />
          </div>
        </div>
      </header>

      {/* Menu Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          {menuCategories.map((category) => (
            <section key={category.id} id={category.id}>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-primary mb-2">
                  {category.name}
                </h2>
                <div className="h-1 w-20 bg-accent rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <MenuCard
                    key={item.id}
                    item={item}
                    onClick={() => handleItemClick(item)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border bg-card">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            Â© {new Date().getFullYear()} Bell's Pub - Desde 1979
          </p>
        </div>
      </footer>

      {/* Modal */}
      <MenuModal
        item={selectedItem}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
};

export default Index;