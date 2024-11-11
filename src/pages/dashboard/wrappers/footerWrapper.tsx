export const FooterWrapper = () => {
  return (
    <footer className="fixed bottom-0 justify-center">
      <div className="flex w-screen justify-center bg-stone-100 dark:bg-stone-900 dark:text-stone-100 py-2 gap-2 text-lg border-t-2 dark:border-stone-800">
        <span>visit</span>
        <a
          className="text-blue-500 dark:text-blue-300"
          href="https://www.surajthotakura.com"
          target="_blank"
        >
          surajthotakura.com
        </a>
        <span>for more</span>
      </div>
    </footer>
  );
};
