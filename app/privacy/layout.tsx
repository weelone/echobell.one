export const runtime = "edge";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="flex flex-col p-4 mt-10 mb-20 mx-auto prose">
      {children}
    </div>
  );
}
