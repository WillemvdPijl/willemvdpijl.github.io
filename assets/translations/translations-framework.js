let lang = "en";

const contentBlocks = [...document.querySelectorAll(".content-block")];

const getContentForProperty = (key, dataset) => {
  const content = dataset.find((data) => data.key === key);
  console.log(content);
  return content;
};

const getPropertyFromContent = (propertyName, content) => {
  const property = content.properties.find((data) => data.name === propertyName);
  console.log(property);
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

      // Update the button value with the translated text
      if (field.tagName === 'INPUT' && field.type === 'submit') {
        field.value = translatedValue;
      } else {
        // For other fields, update the innerHTML as before
        field.innerHTML = translatedValue;
      }
    }
  } catch (error) {
    console.error("Failed to load translation data:", error);
  }
};



contentBlocks.forEach((block) => {
  const contentKey = block.dataset.contentKey;
  const templateFields = block.querySelectorAll("[data-content-property]");
  const jsonFilePath = block.dataset.jsonPath; // Add data attribute "data-json-path" to specify the JSON file path
  renderElements(templateFields, contentKey, jsonFilePath);
});
