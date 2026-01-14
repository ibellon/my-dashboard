import { SimpleWidget, WidgetsGrid } from "@/app/components";

export const metadata = {
  title: "Admin Dashboard",
  descripcion: "Tablero de Administración"
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="ml-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>

      <WidgetsGrid></WidgetsGrid>
      
    </div>
  );
}