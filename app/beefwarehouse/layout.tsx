import HeaderLayout from "../components/layout/header-layout";

export default function BeefWareHouseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HeaderLayout />
        {children}
      </body>
    </html>
  );
}
