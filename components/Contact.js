import React from "react";
import Button from "./Button";
import { Box, Stack, Typography } from "@mui/material";

const contactItems = [
  {
    title: "Wedding Coordinator",
    email: "info@esbidekor.com",
  },
  {
    title: "Moana",
    email: "moana.sodergren@gmail.com",
  },
  {
    title: "Gustav",
    email: "gustav.wiigh@gmail.com",
  },
  {
    title: "Toast Master(s)",
    email: "email to come",
  },
];

export default function Contact({ className }) {
  return (
    <Stack sx={{ display: "flex", flexWrap: "wrap", py: 2 }}>
      {contactItems.map((contact, index) => (
        <Stack key={index} direction="row" gap={2}>
          <Typography key={index} sx={{ fontWeight: 700, minWidth: "200px" }}>{contact.title}</Typography>
          <Typography key={index}>{contact.email}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}
