let lang = "nl";

const contentBlocks = [...document.querySelectorAll(".content-block")];

const getContentForProperty = (key, dataset) => {
  const content = dataset.find((data) => data.key === key);
  return content;
};

const getPropertyFromContent = (propertyName, content) => {
  const property = content.properties.find((data) => data.name === propertyName);
  return property;
};

const parseHtmlEntities = (value) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
};

const renderElements = async (templateFields, key, jsonFilePath) => {
  try {
    const response = await fetch(jsonFilePath);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const textContent = await response.json();

    for (const field of templateFields) {
      const propertyName = field.dataset.contentProperty;
      const content = getContentForProperty(key, textContent);
      const property = getPropertyFromContent(propertyName, content);
      const translatedValue = parseHtmlEntities(property.values[lang]);

      if (field.tagName === 'INPUT' && field.type === 'submit') {
        field.value = translatedValue;
      } else {
        field.innerHTML = translatedValue;
      }
    }
  } catch (error) {
    console.error("Failed to load translation data:", error);
  }
};

const languageDropdown = document.getElementById("languageDropdown");
languageDropdown.addEventListener("change", (event) => {
  lang = event.target.value;
  // Re-render the content blocks with the updated language
  contentBlocks.forEach((block) => {
    const contentKey = block.dataset.contentKey;
    const templateFields = block.querySelectorAll("[data-content-property]");
    const jsonFilePath = block.dataset.jsonPath;
    renderElements(templateFields, contentKey, jsonFilePath);
  });
});

contentBlocks.forEach((block) => {
  const contentKey = block.dataset.contentKey;
  const templateFields = block.querySelectorAll("[data-content-property]");
  const jsonFilePath = block.dataset.jsonPath;
  renderElements(templateFields, contentKey, jsonFilePath);
});
