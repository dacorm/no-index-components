const path = require("path");

module.exports = {
    create(context) {
        const filename = path.relative(context.getCwd(), context.getFilename());

        if (!filename.includes('index')) {
            return {};
        }

        return {
            "Program VariableDeclaration": (node) => {
                context.report({
                    node,
                    message: 'Its prohibited to write react components in index files {{ file }}',
                    data: {
                        file: filename
                    }
                })
            },
            "Program FunctionDeclaration": (node) => {
                context.report({
                    node,
                    message: 'Its prohibited to write react components in index files {{ file }}',
                    data: {
                        file: filename
                    }
                })
            }
        };
    },
};