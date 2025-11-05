import { TabNavigation } from "@/src/components/profile/TabNavigation";

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <TabNavigation />
        {children}
    </>
  );
}