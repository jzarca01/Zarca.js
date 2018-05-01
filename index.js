const render = require('./functions/render');
const createElement = require('./functions/create-element');

const Zarca = function () {
    return {
        render,
        createElement
    }
}
window.Zarca = Zarca();
module.exports = Zarca();