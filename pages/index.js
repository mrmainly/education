import Head from "next/head";
import Navbar from "../components/Children/Navbar";
import Layot from "../components/Children/Layot";
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
      </Head>
      <div>
        <Navbar />
        <Layot />
        <News postList={props.postList} />
        <Calendar postList={props.postList} />
        <Gallery postList={props.postList} />
        <Video postList={props.postList} />
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
