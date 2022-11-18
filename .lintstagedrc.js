module.exports = {
    '*.{.js,jsx,.ts,.tsx}': [
        'prettier --write',
        'eslint --cache --fix',
        'git add',
    ],
    '*.vue': [
        'prettier --write',
        'stylelint --fix',
        'eslint --cache --fix',
        'git add',
    ],
    '*.s?css': ['stylelint --fix', 'prettier --write', 'git add'],
    '*.json': ['prettier --write', 'git add'],
    '*.html': ['prettier --write', 'git add'],
};
