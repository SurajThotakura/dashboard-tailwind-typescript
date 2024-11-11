import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreVertical, User } from "lucide-react";
import { Employee } from "..";

interface ITilesWrapperProps {
  employees: Employee[];
  handleEmployeeClick: (employee: Employee) => void;
}

export const TilesWrapper = ({
  employees,
  handleEmployeeClick,
}: ITilesWrapperProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {employees.map((employee) => (
        <Card
          key={employee.id}
          className="hover:shadow-lg transition-shadow duration-300 cursor-pointer dark:bg-stone-800"
          onClick={() => handleEmployeeClick(employee)}
        >
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-row gap-4 items-center">
                <User className="bg-stone-200 dark:bg-stone-900 dark:border-stone-900 p-1 border-4 w-9 h-9 rounded-full" />
                <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                  {employee.name}
                </h3>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Flag</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-300 mb-2">
              {employee.email}
            </p>
            <p className="text-sm text-stone-600 dark:text-stone-300 mb-2">
              {employee.phone}
            </p>
            <p className="text-sm text-stone-600 dark:text-stone-300 mb-4">
              {employee.company.name}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
