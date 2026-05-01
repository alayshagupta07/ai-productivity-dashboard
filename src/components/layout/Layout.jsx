import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children, activePage, setPage }) {
  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} setPage={setPage} />

      <main className="main-area">
        <Topbar />
        <div className="page-content">{children}</div>
      </main>
    </div>
  );
}

