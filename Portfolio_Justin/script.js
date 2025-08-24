function toggleCertificates(id, cellElement, event) {
  if (
    event.target.tagName.toLowerCase() === "a" ||
    event.target.tagName.toLowerCase() === "img"
  )
    return;

  const folderIcon = cellElement.querySelector(".folder-icon");
  const box = document.getElementById(id);

  // Toggle-Klasse 'show'
  const isOpen = box.classList.contains("show");

  if (isOpen) {
    // schließen
    box.classList.remove("show");
    box.style.height = "0";
    if (folderIcon) folderIcon.style.transform = "rotate(0deg)";
  } else {
    // öffnen
    box.classList.add("show");
    const height = box.scrollHeight + "px";
    box.style.height = height;
    if (folderIcon) folderIcon.style.transform = "rotate(90deg)";
  }
}
