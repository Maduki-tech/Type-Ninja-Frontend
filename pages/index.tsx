import type { NextPage } from "next";
import MainScreen from "./Components/MainScreen/mainscreen";
import Footer from "./Components/Footer/footer";
import Head from "next/head";
import Header from './Components/Header/header'

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Head>
          <title>Type Ninja</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      </div>
		<Header/>
		<MainScreen/>
		<Footer/>
    </div>
  );
};

export default Home;
