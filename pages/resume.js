import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import { Typography, Box, Stack } from "@mui/material";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";
import TopBar from "../components/TopBar";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <Box sx={{ position: 'fixed', bottom: '24px', right: '24px' }}>
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </Box>
      )}
      {data.showCursor && <Cursor />}
      <Box
        className={`container mx-auto ${
          data.showCursor && "cursor-none"
        }`}
        sx={{ marginBottom: '40px' }}
      >
        <TopBar isBlog />
        {mount && (
          <Stack alignItems="center" sx={{ marginTop: '40px', width: '100%' }}>
            <Box
              className={`${
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } rounded-lg shadow-sm`}
              sx={{ width: '100%', maxWidth: '1024px', padding: { xs: '20px', md: '80px' } }}
            >
              <Typography variant="h3" className="text-3xl font-bold">{name}</Typography>
              <Typography variant="h5" className="text-xl mt-5">{resume.tagline}</Typography>
              <Typography variant="h6" className="w-4/5 text-xl mt-5 opacity-50">
                {resume.description}
              </Typography>
              <Box sx={{ marginTop: '8px' }}>
                <Socials />
              </Box>
              <Box sx={{ marginTop: '20px' }}>
                <Typography variant="h4" className="text-2xl font-bold">Experience</Typography>

                {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </Box>
              <Box sx={{ marginTop: '20px' }}>
                <Typography variant="h4" className="text-2xl font-bold">Education</Typography>
                <Box sx={{ marginTop: '8px' }}>
                  <Typography variant="h6" className="text-lg">{resume.education.universityName}</Typography>
                  <Typography variant="body2" className="text-sm opacity-75">
                    {resume.education.universityDate}
                  </Typography>
                  <Typography variant="body1" className="text-sm mt-2 opacity-50">
                    {resume.education.universityPara}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: '20px' }}>
                <Typography variant="h4" className="text-2xl font-bold">Skills</Typography>
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
                  {resume.languages && (
                    <Box sx={{ marginTop: { xs: '20px', md: '8px' } }}>
                      <Typography variant="h6" className="text-lg">Languages</Typography>
                      <ul className="list-disc">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="ml-5 py-2">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </Box>
                  )}

                  {resume.frameworks && (
                    <Box sx={{ marginTop: { xs: '20px', md: '8px' } }}>
                      <Typography variant="h6" className="text-lg">Frameworks</Typography>
                      <ul className="list-disc">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </Box>
                  )}

                  {resume.others && (
                    <Box sx={{ marginTop: { xs: '20px', md: '8px' } }}>
                      <Typography variant="h6" className="text-lg">Others</Typography>
                      <ul className="list-disc">
                        {resume.others.map((other, index) => (
                          <li key={index} className="ml-5 py-2">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </Box>
                  )}
                </Stack>
              </Box>
            </Box>
          </Stack>
        )}
      </Box>
    </>
  );
};

export default Resume;
