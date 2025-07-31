import { Header } from "@/components/header";
import { Intro } from "@/components/home/intro";
import { PopularCars } from "@/components/home/popularCars";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <PopularCars />
    </>
  );
}
