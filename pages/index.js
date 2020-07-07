import Head from "next/head";
import Navbar from "../components/Children/Navbar";
import Layout from "../components/Children/Layout";
import News from "../components/Children/News";
import Calendar from "../components/Children/Сalendar";
import Gallery from "../components/Children/Gallery_Photo";
import Video from "../components/Children/Video";
import Footer from "../components/Children/Footer";

export default function Index(props) {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/journal/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css"
        />

        <script src="https://unpkg.com/react-id-swiper@2.3.1/lib/react-id-swiper.js"></script>
        <script src="https://unpkg.com/react-id-swiper@2.3.1/lib/react-id-swiper.min.js"></script>
      </Head>
      <div>
        <Navbar />
        <Layout />
        <News News={props.postList} />
        <Calendar Calen={props.postList} />
        <Gallery Galler={props.postList} />
        <Video Video={props.postList} />
        <Footer />
      </div>
    </div>
  );
}

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3333/posts");
  const postList = await res.json();
  return { postList };
};
