export const SubheaderWrapper = () => {
  return (
    <div className="bg-stone-200 dark:bg-stone-800">
      <div className="container mx-auto px-4">
        <nav className="flex  overflow-x-auto">
          <a
            href="#"
            className=" py-2 px-4 text-sm bg-stone-100 dark:bg-stone-900 dark:border-stone-800 border-4 rounded-lg text-stone-600 dark:text-stone-300 hover:text-stone-900 hover:bg-stone-300 dark:hover:bg-stone-900 dark:hover:text-white whitespace-nowrap"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="py-2 px-4 text-sm text-stone-600 dark:text-stone-300 dark:border-stone-800 border-4 rounded-lg hover:text-stone-900 hover:bg-stone-300 dark:hover:bg-stone-900 dark:hover:text-white whitespace-nowrap"
          >
            Employees
          </a>
          <a
            href="#"
            className="py-2 px-4 text-sm text-stone-600 dark:text-stone-300 dark:border-stone-800 border-4 rounded-lg hover:text-stone-900 hover:bg-stone-300 dark:hover:bg-stone-900 dark:hover:text-white whitespace-nowrap"
          >
            Projects
          </a>
          <a
            href="#"
            className="py-2 px-4 text-sm text-stone-600 dark:text-stone-300 dark:border-stone-800 border-4 rounded-lg hover:text-stone-900 hover:bg-stone-300 dark:hover:bg-stone-900 dark:hover:text-white whitespace-nowrap"
          >
            Reports
          </a>
          <a
            href="#"
            className="py-2 px-4 text-sm text-stone-600 dark:text-stone-300 dark:border-stone-800 border-4 rounded-lg hover:text-stone-900 hover:bg-stone-300 dark:hover:bg-stone-900 dark:hover:text-white whitespace-nowrap"
          >
            Settings
          </a>
        </nav>
      </div>
    </div>
  );
};
