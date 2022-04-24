import React from "react";
import Layout from "../components/Layout";
import ProjectItem from "../components/ProjectItem";
import { Grid, Heading } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Layout>
      <Heading mb="50px">Projects</Heading>
      <Grid
        templateColumns={{ base: "repeat(1)", md: "repeat(2, 1fr)" }}
        gap={10}
      >
        <ProjectItem
          delayDuration="0.1"
          heading="Project 1"
          image="profile"
          text="Ullamco consectetur consequat magna ex mollit in anim cupidatat."
        />
        <ProjectItem
          delayDuration="0.2"
          heading="Project 2 "
          image="black"
          text="Qui ullamco et sit eiusmod reprehenderit minim."
        />
        <ProjectItem
          delayDuration="0.3"
          heading="Project 3"
          image="black"
          text="Elit est enim aliquip magna do culpa sint est esse eiusmod quis Lorem.Elit est enim aliquip magna do culpa sint est esse eiusmod quis Lorem."
        />
        <ProjectItem
          delayDuration="0.4"
          heading="Project 4"
          image="black"
          text="Quis esse magna incididunt ut duis voluptate minim do."
        />
        <ProjectItem
          delayDuration="0.5"
          heading="Project 5"
          image="black"
          text="Quis esse magna incididunt ut duis voluptate minim do."
        />
        <ProjectItem
          delayDuration="0.6"
          heading="Project 6"
          image="black"
          text="Quis esse magna incididunt ut duis voluptate minim do."
        />
      </Grid>
    </Layout>
  );
};

export default Projects;
