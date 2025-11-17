import { useState } from "react";
import { MenuItem } from "@/types/menu";
import { menuCategories } from "@/data/menuData";
import { MenuCard } from "@/components/MenuCard";
import { MenuModal } from "@/components/MenuModal";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="py-10" />
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
                    onClick={item.isVisible == false ? ()=>{} : (category.isOpen ? () => handleItemClick(item) : ()=>{})}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />

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