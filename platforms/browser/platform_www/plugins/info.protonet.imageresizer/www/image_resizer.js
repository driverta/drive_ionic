cordova.define("info.protonet.imageresizer.ImageResizer", function(require, exports, module) { var ImageResizer = function() {};

ImageResizer.prototype.resize = function(options, success, fail) {
  cordova.exec(function(uri) {
    success(uri);
  }, function(e) {
    fail(e);
  }, "ImageResizer", "resize", [options]);
};

var imageResizer = new ImageResizer();
module.exports = imageResizer;

});
