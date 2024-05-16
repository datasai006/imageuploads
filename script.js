const addDocumentsBtn = document.getElementById("add-documents-btn");
const uploadPopup = document.getElementById("upload-popup");

addDocumentsBtn.addEventListener("click", () => {
  uploadPopup.style.display = "block";
});

function closePopup() {
  uploadPopup.style.display = "none";
}

function uploadFiles() {
  const fileInput = document.getElementById("file-input");
  const files = fileInput.files;
  // Perform file upload logic here
}

document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("file-input");
  const fileNamesDisplay = document.getElementById("file-names");

  fileInput.addEventListener("change", function () {
    const files = fileInput.files;
    if (files.length > 0) {
      let fileNames = "";
      for (let i = 0; i < files.length; i++) {
        fileNames += files[i].name;
        if (i !== files.length - 1) {
          fileNames += ", ";
        }
      }
      fileNamesDisplay.textContent = fileNames;
    } else {
      fileNamesDisplay.textContent = "Experience Letter";
    }
  });
});
