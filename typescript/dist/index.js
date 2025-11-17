(function () {
  'use strict';

  // t1[2] = '456';  报错 元组的元素是固定的 不能改变
  var Color;
  (function (Color) {
      Color[Color["Red"] = 0] = "Red";
      Color[Color["Green"] = 1] = "Green";
      Color[Color["Blue"] = 2] = "Blue";
  })(Color || (Color = {}));

})();
//# sourceMappingURL=index.js.map
