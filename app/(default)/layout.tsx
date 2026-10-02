import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import MobileCta from "@/components/mobile-cta";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="grow">{children}</main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
