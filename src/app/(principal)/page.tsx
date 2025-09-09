'use server';

import { Cars } from "@/components/principal/home/cars";
import { Intro } from "@/components/principal/home/intro";
import { KnowOurBlog } from "@/components/principal/home/knowOurBlog";
import { MarketPlace } from "@/components/principal/home/marketPlace";
import { getCars } from "@/services/getCars";

export default async function Home() {
  const data = await getCars();

  return (
    <>
      <Intro />
      <MarketPlace />
      <Cars carData = {data?.data} />
      <KnowOurBlog />
    </>
  );
}
