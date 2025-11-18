
//Cons es una palabra reservada que declara constantes 
  const form = document.getElementById("article-form");
  const imageUrl = document.getElementById("image-url");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const date = document.getElementById("date");
  const area = document.getElementById("area");

  const errImageUrl = document.getElementById("error-image-url");
  const errTitle = document.getElementById("error-title");
  const errDescription = document.getElementById("error-description");
  const errDate = document.getElementById("error-date");
  const errArea = document.getElementById("error-area");

  const createButton = document.getElementById("create-button");
  const resetButton = document.getElementById("reset-button");

  const articlesContainer = document.querySelector("main");

  function validateInputs() {
    errImageUrl.textContent = "";
    errTitle.textContent = "";
    errDescription.textContent = "";
    errDate.textContent = "";
    errArea.textContent = "";

    let valid = true;

    if (imageUrl.value.trim() === "") {
      errImageUrl.textContent = "La URL de la imagen es obligatoria.";
      valid = false;
    }
    if (title.value.trim() === "") {
      errTitle.textContent = "El título es obligatorio.";
      valid = false;
    }
    if (description.value.trim() === "") {
      errDescription.textContent = "La descripción es obligatoria.";
      valid = false;
    }
    if (date.value === "") {
      errDate.textContent = "La fecha es obligatoria.";
      valid = false;
    }
    if (area.value.trim() === "") {
      errArea.textContent = "El área es obligatoria.";
      valid = false;
    }

    return valid;
  }

  function createArticleElement(data) {
  console.log("Creando artículo con data:", data);

  const article = document.createElement("article");
  article.className = "new-article";
  article.style.position = "relative";

  const img = document.createElement("img");
  img.src = data.imageUrl;
  img.alt = "Imagen del artículo";
  img.style.maxWidth = "100%";

  const h2 = document.createElement("h2");
  h2.textContent = data.title;

  const pDesc = document.createElement("p");
  pDesc.textContent = data.description;

  const footer = document.createElement("footer");

  const timeEl = document.createElement("time");
  timeEl.setAttribute("datetime", data.date);
  timeEl.textContent = data.date;

  const spanDot = document.createElement("span");
  spanDot.textContent = " • ";

  const spanArea = document.createElement("span");
  spanArea.textContent = data.area;

  footer.append(timeEl, spanDot, spanArea);

  console.log("Footer creado:", footer);

  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "×";
  closeBtn.className = "close-article-button";
  closeBtn.type = "button";
  closeBtn.addEventListener("click", function () {
    article.remove();
  });

  article.append(closeBtn, img, h2, pDesc, footer);

  console.log("Artículo completo:", article);

  return article;
}


  createButton.addEventListener("click", function () {
    if (!validateInputs()) {
      return;
    }

    const newArticle = createArticleElement({
      imageUrl: imageUrl.value.trim(),
      title: title.value.trim(),
      description: description.value.trim(),
      date: date.value,
      area: area.value.trim(),
    });

    articlesContainer.appendChild(newArticle);
    form.reset();
  });

  resetButton.addEventListener("click", function () {
    form.reset();
    errImageUrl.textContent = "";
    errTitle.textContent = "";
    errDescription.textContent = "";
    errDate.textContent = "";
    errArea.textContent = "";
  });

