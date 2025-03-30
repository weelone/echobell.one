import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "../layout.config";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
