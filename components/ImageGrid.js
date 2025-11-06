import * as React from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { getAssetPath } from "../utils/getAssetPath";

const styles = {
  imageGridBox: {
    width: "100%",
    overflowX: "auto",
    overflowY: "hidden",
    marginBottom: 0,
    "&::-webkit-scrollbar": {
      height: "10px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "primary.main",
      borderRadius: "4px",
      "&:hover": {
        backgroundColor: "primary.dark",
      },
    },
  },
  imageListItem: {
    width: "auto",
    minWidth: "350px",
  },
};

export default function ImageGrid({
  images = [],
  maxHeight = 450,
  cols = 4,
  rowHeight = 250,
}) {
  const height = Math.min(maxHeight, 450);
  return (
    <Box sx={styles.imageGridBox}>
      <ImageList
        sx={{
          height: `${rowHeight}px`,
          display: "flex",
          flexWrap: "nowrap",
          transform: "translateZ(0)",
          margin: 0,
        }}
        cols={cols}
        rowHeight={rowHeight}
        gap={12}
      >
        {images.map((item, index) => (
          <ImageListItem key={item.img || index} sx={styles.imageListItem}>
            <img
              srcSet={`${getAssetPath(
                item.img
              )}?w=350&h=${rowHeight}&fit=crop&auto=format&dpr=2 2x`}
              src={`${getAssetPath(
                item.img
              )}?w=350&h=${rowHeight}&fit=crop&auto=format`}
              alt={item.title || `Image ${index + 1}`}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
