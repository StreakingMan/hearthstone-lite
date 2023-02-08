/**
 * stylelint config
 * @ref https://stylelint.io/
 * @desc generated at 11/18/2022, 4:30:43 PM by streakingman-cli@1.10.0
 */

module.exports = {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recommended-vue/scss',
        'stylelint-config-tailwindcss',
        'stylelint-config-prettier',
    ],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen',
                    'mixin',
                    'include',
                ],
            },
        ],
        'selector-class-pattern': null,
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global'],
            },
        ],
    },
};
