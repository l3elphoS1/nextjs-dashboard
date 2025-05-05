import "@/app/ui/global.css";
import { deliusUnicase } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${deliusUnicase.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
