import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Employee } from "..";

interface ITableWrapperProps {
  employees: Employee[];
  handleEmployeeClick: (employee: Employee) => void;
}

export const TableWrapper = ({
  employees,
  handleEmployeeClick,
}: ITableWrapperProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-stone-800">
        <thead>
          <tr className="bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left"></th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Username</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Phone</th>
            <th className="py-3 px-6 text-left">Website</th>
            <th className="py-3 px-6 text-left">Company</th>
            <th className="py-3 px-6 text-left">Catch Phrase</th>
            <th className="py-3 px-6 text-left">BS</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-stone-600 dark:text-stone-300 text-sm font-light">
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="border-b border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-700"
            >
              <td className="py-3 px-6">
                <User className="bg-stone-200 dark:bg-stone-900 dark:border-stone-900 p-1 border-4 w-9 h-9 rounded-full" />
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {employee.name}
              </td>
              <td className="py-3 px-6 text-left">{employee.username}</td>
              <td className="py-3 px-6 text-left">{employee.email}</td>
              <td className="py-3 px-6 text-left">{employee.phone}</td>
              <td className="py-3 px-6 text-left">{employee.website}</td>
              <td className="py-3 px-6 text-left">{employee.company.name}</td>
              <td className="py-3 px-6 text-left">
                {employee.company.catchPhrase}
              </td>
              <td className="py-3 px-6 text-left">{employee.company.bs}</td>
              <td className="py-3 px-6 text-left">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleEmployeeClick(employee)}
                >
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
