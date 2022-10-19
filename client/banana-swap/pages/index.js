import Head from "next/head";
import Home from "../components/Home";
const Index = () => {
  return (
    <div>
      <Head>
        <title>Banana Swap</title>
        <meta name="description" content="Banana Swap DEX" />
      </Head>
      <Home />
    </div>
  );
};

export default Index;
