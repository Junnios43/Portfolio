import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Container({ children, ...customMeta }) {
  const meta = {
    title: "About - Jun Wang",
    description: `Passionate in Front-End Development`,
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Jun Wang" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
