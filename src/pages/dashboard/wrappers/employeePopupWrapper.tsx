import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Employee } from "..";
import { User } from "lucide-react";

interface IEmployeePopupWrapper {
  selectedEmployee: Employee | null;
  closeDetailView: () => void;
}

export const EmployeePopupWrapper = ({
  selectedEmployee,
  closeDetailView,
}: IEmployeePopupWrapper) => {
  return (
    <Dialog open={!!selectedEmployee} onOpenChange={closeDetailView}>
      <DialogContent className="sm:max-w-[425px] dark:text-stone-100 dark:bg-stone-800 px-8 py-6">
        <DialogHeader>
          <DialogTitle>{selectedEmployee?.name}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <User className=" h-24 w-24 rounded-full border-4 p-4" />
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Username:</span>
            <span className="col-span-3">{selectedEmployee?.username}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Email:</span>
            <span className="col-span-3">{selectedEmployee?.email}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Phone:</span>
            <span className="col-span-3">{selectedEmployee?.phone}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Website:</span>
            <span className="col-span-3">{selectedEmployee?.website}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Company:</span>
            <span className="col-span-3">{selectedEmployee?.company.name}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Catch Phrase:</span>
            <span className="col-span-3">
              {selectedEmployee?.company.catchPhrase}
            </span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">BS:</span>
            <span className="col-span-3">{selectedEmployee?.company.bs}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
