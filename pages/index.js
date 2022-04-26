import About from "../components/About";
import NameAndImage from "../components/NameAndImage";
import Skills from "../components/Skills";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <Layout>
      <NameAndImage />
      <About />
      <Skills />

      <Contact />
      <Footer />
    </Layout>
  );
}
