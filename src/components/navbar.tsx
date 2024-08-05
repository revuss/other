import ThemeButton from "./themeButton";

export function Navbar() {
  return (
    <>
      <nav className="h-auto py-4 flex justify-between px-10">
        <span>Navbar</span> <ThemeButton />
      </nav>
    </>
  );
}
