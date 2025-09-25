'use server';

import { Posts } from "@/@types/Posts";
import { Cars } from "@/components/principal/home/cars";
import { Intro } from "@/components/principal/home/intro";
import { KnowOurBlog } from "@/components/principal/home/knowOurBlog";
import { MarketPlace } from "@/components/principal/home/marketPlace";
import { getCars } from "@/services/getCars";
import { getPosts } from "@/services/getPosts";

export default async function Home() {
  const data = await getCars();

  const dataBlog: Posts[] | any = await getPosts();
  const blogData = dataBlog?.data?.slice(0,3);

  return (
    <div className="scroll-smooth">
      <Intro />
      <MarketPlace />
      <Cars carData = {data?.data} />
      <KnowOurBlog blogData = {blogData} />
    </div>
  );
}
