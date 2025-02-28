function setPosition(parent, baby) {
  for(let i=0; i<baby.length; i++) {
  parent.appendChild(baby[i]);
  }
};

export { setPosition };