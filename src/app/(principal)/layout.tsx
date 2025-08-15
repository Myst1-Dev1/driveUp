import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Providers from "@/services/store/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
    </>
  );
}
