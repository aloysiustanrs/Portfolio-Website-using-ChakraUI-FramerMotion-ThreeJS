import React from "react";
import Layout from "../components/Layout";
import ProjectItem from "../components/ProjectItem";
import { Grid, Heading } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Layout>
      <Heading mb="50px" letterSpacing="wide">
        Projects
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1)", md: "repeat(2, 1fr)" }}
        gap={10}
      >
        <ProjectItem
          delayDuration="0.1"
          heading="AllCrypto Website"
          image="allcrypto.png"
          text="Crypto website created using React with data extracted from CoinGecko API and news API"
          link="https://allcrypto.netlify.app/"
        />
        {/* <ProjectItem
          delayDuration="0.2"
          heading="Project 2 "
          image="profile.jpg"
          text="Qui ullamco et sit eiusmod reprehenderit minim."
        />
        <ProjectItem
          delayDuration="0.3"
          heading="Project 3"
          image="profile.jpg"
          text="Elit est enim aliquip magna do culpa sint est esse eiusmod quis Lorem.Elit est enim aliquip magna do culpa sint est esse eiusmod quis Lorem."
        />
        <ProjectItem
          delayDuration="0.4"
          heading="Project 4"
          image="profile.jpg"
          text="Quis esse magna incididunt ut duis voluptate minim do."
        /> */}
      </Grid>
    </Layout>
  );
};

export default Projects;
