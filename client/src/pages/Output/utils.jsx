// Download a Base64-encoded file
function downloadBase64File(base64Data, filename) {
  var element = document.createElement("a");
  element.setAttribute("href", base64Data);
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

// Convert local URL to Base64
function convertImgToBase64(url, callback, outputFormat) {
  let canvas = document.createElement("CANVAS");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = function () {
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL(outputFormat || "image/png");
    callback(dataURL, outputFormat);
    // Clean up
    canvas = null;
  };
  img.src = url;
}

// Extract an Base64 Image's File Extension
function extractImageFileExtensionFromBase64(base64Data) {
  return base64Data.substring(
    "data:image/".length,
    base64Data.indexOf(";base64")
  );
}

export const downloadImage = (image, base64 = false) => {
  const extension = extractImageFileExtensionFromBase64(image);
  if (base64) {
    downloadBase64File(image, `myImage.${extension}`);
  } else {
    convertImgToBase64(image, downloadBase64File, `myImage.png`);
  }
};
