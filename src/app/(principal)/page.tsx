import { Header } from "@/components/header";
import { Intro } from "@/components/principal/home/intro";
import { PopularCars } from "@/components/principal/home/popularCars";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <PopularCars />
    </>
  );
}
