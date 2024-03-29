const schema = {
    "type": "object",
    "properties": {
        "presets": {
            "type": "array"
        }
    }
}
const babel = require('@babel/core')
module.exports = function (content) {
    const options = this.getOptions(schema);
    const callback = this.async();
    babel.transform(content, options, function (err, result) {
        if (err) {
            callback(err)
        } else {
            callback(null, result.code)
        }
    })
}