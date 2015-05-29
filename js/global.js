// Browser Slide-Show script.
// With image cross fade effect for those browsers that support it.
// Script copyright (c) 2004-2006 www.cryer.co.uk.
// Script is free to use provided this copyright header is included.
var slideCache = new Array();
function RunSlideShow(pictureName, imageFiles, displaySecs)
{
  var imageSeparator = imageFiles.indexOf(";");
  var nextImage = imageFiles.substring(0, imageSeparator);
  if (document.all)
  {
    document.getElementById(pictureName).style.filter = "blendTrans(duration=3)";
    document.getElementById(pictureName).filters.blendTrans.Apply();
  }
  document.getElementById(pictureName).src = nextImage;
  if (document.all)
  {
    document.getElementById(pictureName).filters.blendTrans.Play();
  }
  var futureImages = imageFiles.substring(imageSeparator + 1, imageFiles.length)
          + ';' + nextImage;
  setTimeout("RunSlideShow('" + pictureName + "','" + futureImages + "'," + displaySecs + ")",
          displaySecs * 600);
  // Cache the next image to improve performance.
  imageSeparator = futureImages.indexOf(";");
  nextImage = futureImages.substring(0, imageSeparator);
  if (slideCache[nextImage] == null) {
    slideCache[nextImage] = new Image;
    slideCache[nextImage].src = nextImage;
  }
}
