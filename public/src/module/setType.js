function setType(tagName, name, value) {
  tagName.name = name;
  tagName.placeholder = name;
  tagName.required = true;
  tagName.value = value
};

export { setType };