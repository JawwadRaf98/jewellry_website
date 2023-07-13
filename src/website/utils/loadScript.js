export const loadScriptByURL = (id, url) => {
  const isScriptExist = document.getElementById(id);
  if (!isScriptExist) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.id = id;
    document.body.appendChild(script);
  }
};
