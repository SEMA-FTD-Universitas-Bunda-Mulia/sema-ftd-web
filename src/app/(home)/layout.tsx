import { SidebarProvider } from "@/components/ui/sidebar";
import { Navbar } from "./navbar";
import { NavbarSidebar } from "./navbar-sidebar";
import { Footer } from "./footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <SidebarProvider defaultOpen={false}>
        <NavbarSidebar />
        <main className="flex flex-col w-full overflow-hidden">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
