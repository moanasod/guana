import React, { useState } from "react";
import Button from "./Button";
import DatePicker from "react-datepicker";
import TextareaAutosize from "react-textarea-autosize";
import { useTheme } from "next-themes";
import { Typography, Box, Stack } from "@mui/material";

import "react-datepicker/dist/react-datepicker.css";

export default function BlogEditor({ post, close, refresh }) {
  const { theme } = useTheme();
  const [currentTabs, setCurrentTabs] = useState("BLOGDETAILS");
  const [blogContent, setBlogContent] = useState(post.content);
  const [blogVariables, setBlogVariables] = useState({
    date: post.date,
    title: post.title,
    tagline: post.tagline,
    preview: post.preview,
    image: post.image,
  });

  const savePost = async () => {
    if (process.env.NODE_ENV === "development") {
      await fetch("/api/blog/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: post.slug,
          content: blogContent,
          variables: blogVariables,
        }),
      }).then((data) => {
        if (data.status === 200) {
          close();
          refresh();
        }
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        zIndex: 10,
        width: '100vw',
        height: '100vh',
        overflow: 'auto',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme === "dark" ? '#000000' : '#ffffff'
      }}
    >
      <Box sx={{ maxWidth: '1200px', marginY: '80px', paddingX: '16px' }}>
        <Box sx={{ marginTop: '40px' }}>
          <Box sx={{ zIndex: 10, position: 'sticky', top: '48px' }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="h3" sx={{ fontSize: '2.25rem' }}>{blogVariables.title}</Typography>
              <Stack direction="row" alignItems="center">
                <Button onClick={savePost} type="primary">
                  Save
                </Button>
                <Button onClick={close}>Close</Button>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Button
                onClick={() => setCurrentTabs("BLOGDETAILS")}
                type={currentTabs === "BLOGDETAILS" && "primary"}
              >
                Blog Details
              </Button>
              <Button
                onClick={() => setCurrentTabs("CONTENT")}
                type={currentTabs === "CONTENT" && "primary"}
              >
                Content
              </Button>
            </Stack>
          </Box>
        </Box>
        {currentTabs === "BLOGDETAILS" && (
          <Stack spacing={3} sx={{ marginTop: '40px' }}>
            <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label className="w-full text-sx opacity-50">Date</label>
              <DatePicker
                selected={new Date(blogVariables.date)}
                className="w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2"
                onChange={(date) => {
                  setBlogVariables({
                    ...blogVariables,
                    date: date.toISOString(),
                  });
                }}
              />
            </Box>
            <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label className="w-full text-sx opacity-50">Title</label>
              <input
                value={blogVariables.title}
                onChange={(e) =>
                  setBlogVariables({ ...blogVariables, title: e.target.value })
                }
                className="w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </Box>

            <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label className="w-full text-sx opacity-50">Tagline</label>
              <input
                value={blogVariables.tagline}
                onChange={(e) =>
                  setBlogVariables({
                    ...blogVariables,
                    tagline: e.target.value,
                  })
                }
                className="w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </Box>
            <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label className="w-full text-sx opacity-50">preview (SEO)</label>
              <textarea
                value={blogVariables.preview}
                onChange={(e) =>
                  setBlogVariables({
                    ...blogVariables,
                    preview: e.target.value,
                  })
                }
                className="w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2"
                type="text"
              ></textarea>
            </Box>
            <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label className="w-full text-sx opacity-50">Image</label>
              <input
                value={blogVariables.image}
                onChange={(e) =>
                  setBlogVariables({
                    ...blogVariables,
                    image: e.target.value,
                  })
                }
                className="w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </Box>
          </Stack>
        )}

        {currentTabs === "CONTENT" && (
          <Box sx={{ marginTop: '40px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label className="w-full text-sx opacity-50">Content</label>
              <TextareaAutosize
                className="w-full h-auto mt-5 p-4 border hover:border-blue-400 rounded-xl shadow-xl"
                value={blogContent}
                onChange={(e) => setBlogContent(e.target.value)}
              ></TextareaAutosize>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

