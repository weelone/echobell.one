export const runtime = "edge";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="flex flex-col py-24 p-4 max-w-4xl mt-10 mb-20 mx-auto prose dark:prose-invert">
      {children}
    </div>
  );
}
