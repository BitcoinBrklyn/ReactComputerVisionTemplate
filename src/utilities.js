export const drawRect = (detections, ctx) => {
  // Clear previous drawings
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Set style for rectangle outline
  ctx.strokeStyle = "#FF0000";
  ctx.lineWidth = 2;

  // Loop through each detection
  detections.forEach((prediction) => {
    // Get Prediction results
    const [x, y, width, height] = prediction["bbox"];
    const text = prediction["class"];

    // Draw rectangle outline
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();

    // Draw label text
    ctx.fillStyle = "#FF0000";
    ctx.fillText(text, x, y - 5);
  });
};
