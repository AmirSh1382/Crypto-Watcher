import React, { useEffect, useState } from "react";

// MUI
import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";

const SkeletonLoading = () => {
  const [skeleton, setSkeleton] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 25; i++) {
      setSkeleton(prevState => [...prevState, i]);
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className="container max-w-6xl mx-auto px-5 my-10">
      {skeleton.map((item) => (
        <div className="mb-3 flex items-center" key={item}>
          <Skeleton
            sx={{ backgroundColor: "rgba(41, 54, 68)" }}
            animation="wave"
            variant="circular"
            width={43}
            height={43}
          />
          <Box ml={2} component="div" variant="div" sx={{ width: "100%" }}>
            <Skeleton
              sx={{ backgroundColor: "rgba(41, 54, 68)" }}
              animation="wave"
              height={43}
            />
          </Box>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoading;
