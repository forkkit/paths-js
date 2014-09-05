// Generated by uRequire v{NO_VERSION} - template: 'nodejs' 
(function (window, global) {
  
var __isAMD = !!(typeof define === 'function' && define.amd),
    __isNode = (typeof exports === 'object'),
    __isWeb = !__isNode;
Bezier = require('./bezier'),
    O = require('./ops'),
    comp = require('./line-chart-comp');

module.exports = (function () {
  return function (options) {
    var arranged, base, i, lines, scale, xscale, yscale, _ref;
    _ref = comp(options), arranged = _ref.arranged, scale = _ref.scale, xscale = _ref.xscale, yscale = _ref.yscale, base = _ref.base;
    i = -1;
    lines = arranged.map(function (_arg) {
      var area, line, points, scaled_points, xmax, xmin, _ref1, _ref2;
      points = _arg.points, xmin = _arg.xmin, xmax = _arg.xmax;
      scaled_points = points.map(scale);
      i += 1;
      line = Bezier({ points: scaled_points });
      area = {
        path: (_ref1 = (_ref2 = line.path).lineto.apply(_ref2, scale([
          xmax,
          base
        ]))).lineto.apply(_ref1, scale([
          xmin,
          base
        ])).closepath(),
        centroid: O.average([
          line.centroid,
          scale([
            xmin,
            base
          ]),
          scale([
            xmax,
            base
          ])
        ])
      };
      return O.enhance(options.compute, {
        item: options.data[i],
        line: line,
        area: area,
        index: i
      });
    });
    return {
      curves: lines,
      xscale: xscale,
      yscale: yscale
    };
  };
}).call(this);


}).call(this, (typeof exports === 'object' ? global : window), (typeof exports === 'object' ? global : window))