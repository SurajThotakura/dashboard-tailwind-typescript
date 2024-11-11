import { Button } from "@/components/ui/button";
import { Grid, LayoutGrid } from "lucide-react";

interface ITableGridToggleProps {
  viewMode: "grid" | "tile";
  setViewMode: (viewMode: "grid" | "tile") => void;
}

export const TableGridToggle = ({
  viewMode,
  setViewMode,
}: ITableGridToggleProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-stone-900 dark:text-white">
        Employee Directory
      </h1>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setViewMode(viewMode === "grid" ? "tile" : "grid")}
        className="dark:text-stone-200 dark:bg-stone-950"
      >
        {viewMode === "grid" ? (
          <LayoutGrid className="h-4 w-4 mr-2" />
        ) : (
          <Grid className="h-4 w-4 mr-2" />
        )}
        {viewMode === "grid" ? "Tile View" : "Grid View"}
      </Button>
    </div>
  );
};
