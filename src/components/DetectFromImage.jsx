// // ** Material UI Imports
import { Stack, Typography } from "@mui/material";

// } from "./gameLogic";
// eslint-disable-next-line
import * as tf from "@tensorflow/tfjs";
// eslint-disable-next-line
import * as cpu from "@tensorflow/tfjs-backend-cpu";
// eslint-disable-next-line
import * as webgl from "@tensorflow/tfjs-backend-webgl";

import * as cocoSsd from "@tensorflow-models/coco-ssd";
import cat from "../media/images/cat.jpg";
import { useEffect, useRef, useState } from "react";
import Speech from "react-text-to-speech";

const DetectFromImage = () => {
  const fileRef = useRef(null)
  const [image, setImage] = useState(cat)
  const [result, setResult] = useState("");
  async function detect() {
    const img = document.getElementById("target");
    const model = await cocoSsd.load();
    const predictions = await model.detect(img);
    setResult(predictions[0]?predictions[0].class : "Object Not Found");
  }
  useEffect(() => {
    detect();
  });

  // const model = cocoSsd.load()
  return (
    <Stack>
      <Stack alignItems={"center"} justifyContent={"centers"}>
        <Stack component={"img"} src={image} id="target" height={"50vh"} onClick={() => fileRef.current.click()} />
        <Stack display={"none"}>
          <input
            ref={fileRef}
            id="cameraFileInput"
            type="file"
            accept="image/*"
            capture="environment"
            onChange={() => setImage(URL.createObjectURL(fileRef.current.files[0]))}
          />
        </Stack>
      </Stack>
      <Typography variant={"h2"} color={"#ffffff"} fontFamily={"Lobster"}>
        {result}
      </Typography>
      <Stack sx={{ opacity: 0 }}>
        <Speech text={result} autoPlay={true} />
      </Stack>
    </Stack>
  );
};

export default DetectFromImage;
