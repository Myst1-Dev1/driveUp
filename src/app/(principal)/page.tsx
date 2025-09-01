'use server';

import { Cars } from "@/components/principal/home/cars";
import { Intro } from "@/components/principal/home/intro";
import { KnowOurBlog } from "@/components/principal/home/knowOurBlog";
import { PopularCars } from "@/components/principal/home/popularCars";
import { getCars } from "@/services/getCars";

export default async function Home() {
  const data = await getCars();

  return (
    <>
      <Intro />
      <PopularCars />
      <Cars carData = {data?.data} />
      <KnowOurBlog />
    </>
  );
}
