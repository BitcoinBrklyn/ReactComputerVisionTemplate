export const drawRect = (detections, ctx) => {
  // Clear previous drawings
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Set style for rectangle outline
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  ctx.strokeStyle = color;
  ctx.font = "20px Arial";
  ctx.lineWidth = 5;

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
    ctx.fillStyle = "color";
    ctx.fillText(text, x, y);
  });
};
