document.addEventListener("DOMContentLoaded", () => {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");
  const input4 = document.getElementById("input4");
  const input5 = document.getElementById("input5");
  const input6 = document.getElementById("input6");

  const out1 = document.getElementById("out1");
  const out2 = document.getElementById("out2");
  const out3 = document.getElementById("out3");
  const out4 = document.getElementById("out4");
  const out5 = document.getElementById("out5");
  const out6 = document.getElementById("out6");

  input1.addEventListener("input", () => out1.textContent = input1.value || "(입력값 1)");
  input2.addEventListener("input", () => out2.textContent = input2.value || "(입력값 2)");
  input3.addEventListener("input", () => out3.textContent = input3.value || "(입력값 3)");
  input4.addEventListener("input", () => out4.textContent = input4.value || "(입력값 4)");
  input5.addEventListener("input", () => out5.textContent = input5.value || "(입력값 5)");
  input6.addEventListener("input", () => out6.textContent = input6.value || "(입력값 6)");

  document.getElementById("downloadBtn1").addEventListener("click", () => {
    const preview = document.getElementById("preview1");
    html2canvas(preview, { scale: 2 }).then(canvas => {
      canvas.toBlob(blob => saveAs(blob, "handout_public.png"));
    });
  });

  document.getElementById("downloadBtn2").addEventListener("click", () => {
    const preview = document.getElementById("preview2");
    html2canvas(preview, { scale: 2 }).then(canvas => {
      canvas.toBlob(blob => saveAs(blob, "handout_private.png"));
    });
  });
});
