import React from "react";
import Layout from "../styles/Layout";
import ProjectItem from "../components/ProjectItem";
import { Grid, Heading } from "@chakra-ui/react";

const projects = () => {
  return (
    <Layout>
      <Heading mb="50px">Projects</Heading>
      <Grid
        templateColumns={{ base: "repeat(1)", md: "repeat(2, 1fr)" }}
        gap={10}
      >
        <ProjectItem
          heading="Project 1"
          image="profile"
          text="Ullamco consectetur consequat magna ex mollit in anim cupidatat."
        />
        <ProjectItem
          heading="Project 2"
          image="black"
          text="Qui ullamco et sit eiusmod reprehenderit minim."
        />
        <ProjectItem
          heading="Project 3"
          image="black"
          text="Elit est enim aliquip magna do culpa sint est esse eiusmod quis Lorem.Elit est enim aliquip magna do culpa sint est esse eiusmod quis Lorem."
        />
        <ProjectItem
          heading="Project 4"
          image="black"
          text="Quis esse magna incididunt ut duis voluptate minim do."
        />
      </Grid>
    </Layout>
  );
};

export default projects;
