import About from "../components/About";
import NameAndImage from "../components/NameAndImage";
import Skills from "../components/Skills";
import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout>
      <NameAndImage />
      <About />
      <Skills />
    </Layout>
  );
}
