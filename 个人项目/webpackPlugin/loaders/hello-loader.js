const schema = require('./options');


module.exports = function(content) {

    const options = this.getOptions(schema);
    const authInfo = `
    /**
     * @Author:${options.author}
     * @Email:${options.email}
     * */
    `;
    return `${authInfo}${content}`
}