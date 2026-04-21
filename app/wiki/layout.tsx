import WikiSidebar from "@/components/WikiSidebar";

export default function WikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", background: "#050505", minHeight: "100vh" }}>
      <WikiSidebar />
      <main style={{ 
        flex: 1, 
        padding: "4rem 10%", 
        height: "100vh", 
        overflowY: "auto",
        scrollBehavior: "smooth"
      }}>
        {children}
      </main>
    </div>
  );
}
