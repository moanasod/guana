import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Typography, Box } from "@mui/material";

const markdownComponents = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  h2({ children }) {
    return (
      <Typography
        variant="h5"
        component="h2"
        fontStyle={"italic"}
        sx={{
          marginTop: "2rem",
          marginBottom: "1rem",
          fontWeight: 500,
          opacity: 1,
        }}
      >
        {children}
      </Typography>
    );
  },
  p({ children }) {
    return (
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.25rem",
          lineHeight: 1.8,
          marginBottom: "1.25rem",
        }}
      >
        {children}
      </Typography>
    );
  },
  ul({ children }) {
    return (
      <Box
        component="ul"
        sx={{
          marginLeft: "1.5rem",
          paddingLeft: "1rem",
          marginBottom: "1.25rem",
          listStyleType: "disc",
        }}
      >
        {children}
      </Box>
    );
  },
  ol({ children }) {
    return (
      <Box
        component="ol"
        sx={{
          marginLeft: "1.5rem",
          paddingLeft: "1rem",
          marginBottom: "1.25rem",
          listStyleType: "decimal",
        }}
      >
        {children}
      </Box>
    );
  },
  li({ children }) {
    return (
      <Typography
        component="li"
        variant="body1"
        sx={{
          fontSize: "1.125rem",
          lineHeight: 1.8,
          marginBottom: "0.5rem",
          display: "list-item",
        }}
      >
        {children}
      </Typography>
    );
  },
};

export default function ContentSection({ content }) {
  return (
    <ReactMarkdown components={markdownComponents} className="markdown-class">
      {content}
    </ReactMarkdown>
  );
}
