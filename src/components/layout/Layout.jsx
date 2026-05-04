import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ 
  children, 
  activePage, 
  setPage, 
  toggleTheme, 
  theme 
}) {
  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} setPage={setPage} />

      <main className="main-area">
        <Topbar toggleTheme={toggleTheme} theme={theme} />
        <div className="page-content">{children}</div>
      </main>
    </div>
  );
}