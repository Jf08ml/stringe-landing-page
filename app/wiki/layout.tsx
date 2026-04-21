import WikiSidebar from "@/components/WikiSidebar";

export default function WikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", background: "#050505", minHeight: "100vh" }}>
      <div className="wiki-sidebar-wrapper">
        <WikiSidebar />
      </div>
      <main style={{ 
        flex: 1, 
        padding: "clamp(1rem, 5vw, 4rem)", 
        height: "100vh", 
        overflowY: "auto",
        scrollBehavior: "smooth"
      }}>
        {children}
      </main>
    </div>
  );
}
