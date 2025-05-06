(function(window, undefined) {
  var dictionary = {
    "4e50abf3-09ec-4622-804a-9bc1915e8d28": "Saved articles",
    "aa2e4e7f-834c-40ac-b871-6408ef30dd0c": "Account",
    "8def10ed-db8b-480b-a6f2-4f5d8baca0c4": "Notifications",
    "f039f78b-a73e-4796-a533-c5a4221d858b": "Category 1",
    "0d4dc535-b02a-4571-9f59-3dca49473d8b": "Category 2",
    "89cf7d1f-168d-4e2c-a7bf-6ab0781e66cc": "Category 4",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "a0b0d11b-dc4a-4716-aebb-c01998cc7863": "Category 3",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "800d628e-4431-4c17-91d7-6cef24ddabb6": "Bottom nav menu",
    "0de8e369-c354-4e80-8729-29d3e1749512": "Tabs",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);