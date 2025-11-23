import React, { JSX } from "react";
import { Stack, Typography } from "@mui/material";

const contactItems = [
  {
    title: "Wedding Coordinator",
    email: "info@esbidekor.com",
  },
  {
    title: "Toast Master(s)",
    email: "email to come",
  },
];

export default function Contact(): JSX.Element {
  return (
    <Stack sx={{ display: "flex", flexWrap: "wrap", py: 2 }}>
      {contactItems.map((contact, index) => (
        <Stack
          key={index}
          direction={{ xs: "column", sm: "row" }}
          gap={{ xs: 0.5, sm: 2 }}
          sx={{ mb: { xs: 1, sm: 0 } }}
        >
          <Typography sx={{ fontWeight: 700, minWidth: { xs: "auto", sm: "200px" } }} >
            {contact.title}
          </Typography>
          <Typography sx={{ wordBreak: "break-word" }}>
            {contact.email}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}
