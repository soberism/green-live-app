export function loadImageAsyns(url) {
  return new Promise(function (resolve, reject) {
    const img = new Image();

    img.onload = function () {
      // console.log(img);
      resolve(url);
    };
    img.onerror = function () {
      reject(new Error("can not load image at " + url));
    };
    img.src = url;
  });
}
