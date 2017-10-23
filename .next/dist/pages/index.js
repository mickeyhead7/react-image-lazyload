'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Source = require('../src/Source');

var _Source2 = _interopRequireDefault(_Source);

var _Picture = require('../src/Picture');

var _Picture2 = _interopRequireDefault(_Picture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mark/Code/mickeyhead7/image-component/pages/index.js?entry';


var src = 'https://crowdcube-prototype.imgix.net/opportunity_images/20938/201602/cover_image_001f58fedff5baf1f0f8a800719a461d.jpg';

exports.default = function () {
    return _react2.default.createElement('div', {
        className: 'jsx-444633391',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_Picture2.default, {
        src: src,
        width: 1280,
        height: 300,
        aggressiveLoad: true,
        customParams: {
            quality: 1
        },
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement(_Source2.default, {
        src: src,
        width: 320,
        height: 300,
        imgProps: {
            media: '(max-width: 320px)'
        },
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }), _react2.default.createElement(_Source2.default, {
        src: src,
        width: 640,
        height: 300,
        imgProps: {
            media: '(max-width: 640px)'
        },
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }), _react2.default.createElement(_Source2.default, {
        src: src,
        width: 960,
        height: 300,
        imgProps: {
            media: '(max-width: 960px)'
        },
        __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }), _react2.default.createElement(_Source2.default, {
        src: src,
        width: 1280,
        height: 300,
        imgProps: {
            media: '(min-width: 961px)'
        },
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: '444633391',
        css: 'body{margin:0;min-width:20em;padding:0;}picture{margin:0;padding:0;}img{max-width:100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEMkIsQUFHMEIsQUFLQSxBQUlNLFNBUkEsQUFLTCxNQUlkLElBSEEsS0FMYyxVQUNkIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrL0NvZGUvbWlja2V5aGVhZDcvaW1hZ2UtY29tcG9uZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTb3VyY2UgZnJvbSAnLi4vc3JjL1NvdXJjZSc7XG5pbXBvcnQgUGljdHVyZSBmcm9tICcuLi9zcmMvUGljdHVyZSc7XG5cbmNvbnN0IHNyYyA9ICdodHRwczovL2Nyb3dkY3ViZS1wcm90b3R5cGUuaW1naXgubmV0L29wcG9ydHVuaXR5X2ltYWdlcy8yMDkzOC8yMDE2MDIvY292ZXJfaW1hZ2VfMDAxZjU4ZmVkZmY1YmFmMWYwZjhhODAwNzE5YTQ2MWQuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxQaWN0dXJlXG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIHdpZHRoPXsxMjgwfVxuICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICBhZ2dyZXNzaXZlTG9hZD17dHJ1ZX1cbiAgICAgICAgICAgIGN1c3RvbVBhcmFtcz17e1xuICAgICAgICAgICAgICAgIHF1YWxpdHk6IDEsXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8U291cmNlXG4gICAgICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezMyMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgICBpbWdQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDMyMHB4KSdcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTb3VyY2VcbiAgICAgICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgICAgICB3aWR0aD17NjQwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgICAgIGltZ1Byb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgIG1lZGlhOiAnKG1heC13aWR0aDogNjQwcHgpJ1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFNvdXJjZVxuICAgICAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgICAgIHdpZHRoPXs5NjB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgICAgaW1nUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA5NjBweCknXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U291cmNlXG4gICAgICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezEyODB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgICAgaW1nUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWluLXdpZHRoOiA5NjFweCknXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvUGljdHVyZT5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiU291cmNlIiwiUGljdHVyZSIsInNyYyIsInF1YWxpdHkiLCJtZWRpYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7Ozs7Ozs7QUFFcEIsSUFBTSxNQUFOLEFBQVksQUFFWjs7a0JBQWUsWUFBQTsyQkFDWCxjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7YUFBRCxBQUNTLEFBQ0w7ZUFGSixBQUVXLEFBQ1A7Z0JBSEosQUFHWSxBQUNSO3dCQUpKLEFBSW9CLEFBQ2hCOztxQkFMSixBQUtrQixBQUNEO0FBREMsQUFDVjs7c0JBTlI7d0JBQUEsQUFTSTtBQVRKO0FBQ0ksdUJBUUEsQUFBQzthQUFELEFBQ1MsQUFDTDtlQUZKLEFBRVcsQUFDUDtnQkFISixBQUdZLEFBQ1I7O21CQUpKLEFBSWMsQUFDQztBQURELEFBQ047O3NCQUxSO3dCQVRKLEFBU0ksQUFRQTtBQVJBO0FBQ0ksd0JBT0osQUFBQzthQUFELEFBQ1MsQUFDTDtlQUZKLEFBRVcsQUFDUDtnQkFISixBQUdZLEFBQ1I7O21CQUpKLEFBSWMsQUFDQztBQURELEFBQ047O3NCQUxSO3dCQWpCSixBQWlCSSxBQVFBO0FBUkE7QUFDSSx3QkFPSixBQUFDO2FBQUQsQUFDUyxBQUNMO2VBRkosQUFFVyxBQUNQO2dCQUhKLEFBR1ksQUFDUjs7bUJBSkosQUFJYyxBQUNDO0FBREQsQUFDTjs7c0JBTFI7d0JBekJKLEFBeUJJLEFBUUE7QUFSQTtBQUNJLHdCQU9KLEFBQUM7YUFBRCxBQUNTLEFBQ0w7ZUFGSixBQUVXLEFBQ1A7Z0JBSEosQUFHWSxBQUNSOzttQkFKSixBQUljLEFBQ0M7QUFERCxBQUNOOztzQkFMUjt3QkFsQ1IsQUFDSSxBQWlDSTtBQUFBO0FBQ0k7aUJBbkNaO2FBRFcsQUFDWDtBQUFBO0FBREoiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmsvQ29kZS9taWNrZXloZWFkNy9pbWFnZS1jb21wb25lbnQifQ==