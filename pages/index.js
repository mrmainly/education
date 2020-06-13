import Head from "next/head";
import Navbar from "../components/Children/Navbar";
import Layot from "../components/Children/Layot";
import News from "../components/Children/News";
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
      </div>
    </div>
  );
}

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3333/posts");
  const postList = await res.json();
  return { postList };
};
