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
function closePopup() {
  document.getElementById("upload-popup").style.display = "none";
}

function displayFileInfo(inputId, infoContainerId) {
  const input = document.getElementById(inputId);
  const file = input.files[0];
  const fileInfoContainer = document.getElementById(infoContainerId);

  if (file) {
    if (file.type.startsWith("image")) {
      const reader = new FileReader();
      reader.onload = function (event) {
        fileInfoContainer.innerHTML = `<img src="${event.target.result}" alt="Image Preview" style="max-width: 60%; max-height: 50%; fit">`;
      };
      reader.readAsDataURL(file);
    } else {
      fileInfoContainer.innerHTML = `<p>File Name: ${file.name}</p>`;
    }
  } else {
    fileInfoContainer.innerHTML = "";
  }
}
//  file upload code
// function closePopup() {
//   document.getElementById("upload-popup").style.display = "none";
// }

// function displayFileInfo(inputId, infoContainerId) {
//   const input = document.getElementById(inputId);
//   const file = input.files[0];
//   const fileInfoContainer = document.getElementById(infoContainerId);

//   if (file) {

//     fileInfoContainer.innerHTML = `<p>File Name: ${file.name}</p>`;
//   } else {

//     fileInfoContainer.innerHTML = "";
//   }
// }
// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.getElementById("container");

//   container.addEventListener("change", (event) => {
//     if (event.target.classList.contains("dropdown")) {
//       handleDropdownChange(event.target);
//     }
//   });

//   container.addEventListener("click", (event) => {
//     if (event.target.classList.contains("add")) {
//       event.preventDefault();
//       addNewEntry();
//     }
//   });

//   function handleDropdownChange(dropdown) {
//     const parentEntry = dropdown.closest(".entry");
//     const existingCustomInput = parentEntry.querySelector(".custom-input");

//     if (dropdown.value === "other" && !existingCustomInput) {
//       const customInput = document.createElement("input");
//       customInput.type = "text";
//       customInput.placeholder = "Enter custom item";
//       customInput.classList.add("custom-input");
//       parentEntry.insertBefore(customInput, dropdown.nextSibling);
//     } else if (dropdown.value !== "other" && existingCustomInput) {
//       parentEntry.removeChild(existingCustomInput);
//     }
//   }

//   function addNewEntry() {
//     const newEntry = document.createElement("div");
//     newEntry.classList.add("entry");

//     const newSelect = document.createElement("select");
//     newSelect.classList.add("dropdown");
//     newSelect.innerHTML = `
//             <option value="">Select an item</option>
//             <option value="item1">Item 1</option>
//             <option value="item2">Item 2</option>
//             <option value="item3">Item 3</option>
//             <option value="other">Other</option>
//         `;
//     newEntry.appendChild(newSelect);

//     const newFileInput = document.createElement("input");
//     newFileInput.type = "file";
//     newFileInput.accept = "image/*";
//     newEntry.appendChild(newFileInput);

//     const newButton = document.createElement("button");
//     newButton.classList.add("add");
//     newButton.textContent = "+";
//     newEntry.appendChild(newButton);

//     container.appendChild(newEntry);
//   }
// });
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");

  container.addEventListener("change", (event) => {
    if (event.target.classList.contains("dropdown")) {
      handleDropdownChange(event.target);
    }
  });

  document.querySelector(".add").addEventListener("click", (event) => {
    event.preventDefault();
    addNewEntry();
  });

  function handleDropdownChange(dropdown) {
    const parentEntry = dropdown.closest(".entry");
    const existingCustomInput = parentEntry.querySelector(".custom-input");

    if (dropdown.value === "other" && !existingCustomInput) {
      const customInput = document.createElement("input");
      customInput.type = "text";
      customInput.placeholder = "Enter custom item";
      customInput.classList.add("custom-input");
      parentEntry.insertBefore(customInput, dropdown.nextSibling);
    } else if (dropdown.value !== "other" && existingCustomInput) {
      parentEntry.removeChild(existingCustomInput);
    }
  }

  function addNewEntry() {
    const newEntry = document.createElement("div");
    newEntry.classList.add("entry");

    const newSelect = document.createElement("select");
    newSelect.classList.add("dropdown");
    newSelect.innerHTML = `
           <option value="">Select an item</option>
              <option value="SSC">SSC</option>
              <option value="INTER">INTER</option>
              <option value="DEGREE">DEGREE</option>
              <option value="PG">PG</option>
              <option value="OFFER-LETTER">OFFER-LETTER</option>
              <option value="JOINING-LETTER">JOINING-LETTER</option>
              <option value="EXPERIENCE-LETTER">EXPERIENCE-LETTER</option>
              <option value="other">Other</option>
        `;
    newEntry.appendChild(newSelect);

    const newFileInput = document.createElement("input");
    newFileInput.type = "file";
    newFileInput.accept = "image/*";
    newEntry.appendChild(newFileInput);

    container.appendChild(newEntry);
  }
});
