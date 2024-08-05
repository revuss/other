import { Navbar } from "@/components/navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export function UserLayout() {
  return (
    <>
      <main>
        <Toaster position="top-right" richColors />
        <Navbar />
        <Outlet />
      </main>
    </>
  );
}
