import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { BlogList } from "../components/blogs";
import { PortfolioList } from "../components/portfolios";
import { BaseLayout } from "../components/layouts";
import { getBlogs } from "@/lib/blogs";
import { getPortfolios } from "@/lib/portfolios";
import { Blog } from "@/interfaces/Blog";
import { Portfolio } from "@/interfaces/Portfolio";

type Props = {
  blogs: Blog[];
  portfolios: Portfolio[];
};

const Home: NextPage<Props> = ({ blogs, portfolios }) => {
  return (
    <BaseLayout>
      <br></br>
      <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
        Portfolio
      </h2>
      <PortfolioList portfolios={portfolios} />
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const blogs = getBlogs();
  const portfolios = getPortfolios();

  return {
    props: { blogs, portfolios },
  };
};

export default Home;
