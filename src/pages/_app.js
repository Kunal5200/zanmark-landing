import Layout from "@/components/layout";
import "@/styles/globals.css";
import "animate.css";
import "aos/dist/aos.css";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
