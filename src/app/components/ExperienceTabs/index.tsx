"use client";
import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import experience from "@/app/data/experience.js";

const ExperienceTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="container mx-auto mb-20 px-6 xl:px-0">
      <h2 className="text-3xl lg:text-6xl text-center mb-8 lg:mb-16">
        My Experience
      </h2>
      <div className="flex justify-center">
        <Box
          className="lg:flex border-[3px] rounded-[20px] w-[853px] he-full lg:h-[317px] shadow-xl"
          id="experienceTabs"
        >
          <Tabs
            className="lg:border-r-[3px] border-white w-44"
            TabIndicatorProps={{ sx: { display: "none" } }}
            orientation="vertical"
            value={selectedTab}
            onChange={handleChange}
          >
            {experience.map((job, index) => (
              <Tab
                className="bg-blue border-solid border-white lg:first:border-t-[3px] first:border-r-[3px] lg:first:border-r-0 lg:border-b-[3px] text-white align-left"
                label={job.title}
                key={index}
              />
            ))}
          </Tabs>
          <Box className="m-auto" sx={{ flexGrow: 1, p: 3 }}>
            {experience.map((job, index) => (
              <TabPanel value={selectedTab} index={index} key={index}>
                <h3 className="text-2xl">{job.title}</h3>
                <span className="block">
                  {job.location} {job.duration}
                </span>
                <ul className="list-disc ml-4">
                  {job.bulletpoints.map((bulletpoint, index) => (
                    <li key={index}>{bulletpoint}</li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </Box>
        </Box>
      </div>
    </div>
  );
};

const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className="flex flex-row"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default ExperienceTabs;
