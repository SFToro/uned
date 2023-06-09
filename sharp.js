import sharp from "sharp";
import { glob } from "glob";
// import path from "path";
// import { fileURLToPath } from "url";
// import fs from "fs";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const extension = "jpg";
const exerciseImgs = glob.sync(`./src/js/ejercicio-5/**/*.${extension}`);
// const alreadyTransformed = glob.sync(`./src/js/ejercicio-5/**/*.webp`);

exerciseImgs.forEach((img) => {
  const newName = img.replace(`${extension}`, "avif");
  // if (alreadyTransformed.includes(newName)) return;
  console.log("Starting to process: ", img);
  sharp(img)
    .toFile(newName)
    .then(() => {
      //       // fs.copyFileSync(newName, newName.replace("js/ejercicio-04", "public"));
      console.log("Done with: ", newName);
    });
});
