import { useState, useEffect } from "react";
import { HeaderWrapper } from "./wrappers/headerWrapper";
import { SubheaderWrapper } from "./wrappers/subHeaderWrapper";
import { TableWrapper } from "./wrappers/tableWrapper";
import { TilesWrapper } from "./wrappers/tilesWrapper";
import { EmployeePopupWrapper } from "./wrappers/employeePopupWrapper";
import { TableGridToggle } from "./wrappers/tableGridToggle";

export type Employee = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const Dashboard = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "tile">("grid");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleEmployeeClick = (employee: Employee) => {
    setSelectedEmployee(employee);
  };

  const closeDetailView = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-stone-900 transition-colors duration-200">
      <HeaderWrapper />
      <SubheaderWrapper />
      <main className="container mx-auto px-4 py-8">
        <TableGridToggle viewMode={viewMode} setViewMode={setViewMode} />
        {viewMode === "grid" ? (
          <TableWrapper
            employees={employees}
            handleEmployeeClick={handleEmployeeClick}
          />
        ) : (
          <TilesWrapper
            employees={employees}
            handleEmployeeClick={handleEmployeeClick}
          />
        )}

        <EmployeePopupWrapper
          selectedEmployee={selectedEmployee}
          closeDetailView={closeDetailView}
        />
      </main>
    </div>
  );
};
