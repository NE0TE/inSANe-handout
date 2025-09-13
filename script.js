document.addEventListener("DOMContentLoaded", () => {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");
  const input5 = document.getElementById("input5");
  const input6 = document.getElementById("input6");

  const out1 = document.getElementById("out1");
  const out2 = document.getElementById("out2");
  const out3 = document.getElementById("out3");
  const out5 = document.getElementById("out5");
  const out6 = document.getElementById("out6");

  function enableMultiline(input, output, placeholder) {
    input.addEventListener("input", () => {
      output.innerHTML = input.value ? input.value.replace(/\n/g, "<br>") : placeholder;
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const start = input.selectionStart;
        input.value = input.value.substring(0, start) + "\n" + input.value.substring(start);
        input.selectionStart = input.selectionEnd = start + 1;
        input.dispatchEvent(new Event("input"));
      }
    });
  }

  enableMultiline(input1, out1, "(입력값 1)");
  enableMultiline(input2, out2, "(입력값 2)");
  enableMultiline(input3, out3, "(입력값 3)");
  enableMultiline(input5, out5, "(입력값 5)");
  enableMultiline(input6, out6, "(입력값 6)");

  document.getElementById("label1").addEventListener("change", (e) => {
    e.target.parentElement.textContent = e.target.value;
  });

  document.getElementById("label5").addEventListener("change", (e) => {
    e.target.parentElement.textContent = e.target.value;
  });

  document.getElementById("downloadBtn1").addEventListener("click", () => {
    const preview = document.getElementById("preview1");
    const filename = (input1.value.trim() || "handout_public") + ".png";
    html2canvas(preview, { scale: 2 }).then(canvas => {
      canvas.toBlob(blob => saveAs(blob, filename));
    });
  });

  document.getElementById("downloadBtn2").addEventListener("click", () => {
    const preview = document.getElementById("preview2");
    const filename = (input5.value.trim() || "handout_private") + ".png";
    html2canvas(preview, { scale: 2 }).then(canvas => {
      canvas.toBlob(blob => saveAs(blob, filename));
    });
  });
});
