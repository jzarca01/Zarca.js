const render = require('./functions/render');

const Zarca = function() {
    return {
        render
    }
}
window.Zarca = Zarca();
module.exports = Zarca();