import { Cars } from "@/components/principal/home/cars";
import { Intro } from "@/components/principal/home/intro";
import { KnowOurBlog } from "@/components/principal/home/knowOurBlog";
import { PopularCars } from "@/components/principal/home/popularCars";

export default function Home() {
  return (
    <>
      <Intro />
      <PopularCars />
      <Cars />
      <KnowOurBlog />
    </>
  );
}
