module.exports = {
    '*.{[tj]s,[tj]sx,[cm]js}': ['prettier --write', 'eslint --fix'],
    '*.vue': ['prettier --write', 'stylelint --fix', 'eslint --fix'],
    '*.s?css': ['stylelint --fix', 'prettier --write'],
    '*.json': ['prettier --write'],
    '*.html': ['prettier --write'],
};
