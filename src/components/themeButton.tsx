import useTheme from "@/context/themeContext";

function ThemeButton() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const onSwitchBtn = (e: { currentTarget: { checked: boolean } }) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <>
      <div className="w-full justify-end text-end">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={onSwitchBtn}
            checked={themeMode === "dark"}
          />
          <span className="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Theme
          </span>
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
        </label>
      </div>
    </>
  );
}

export default ThemeButton;
