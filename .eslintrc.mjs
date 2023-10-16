module.exports = {
    "env": {
        "jest": true,
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier",
        "import"
    ],
    "rules": {
        "prettier/prettier": "warn",
        "import/extension": "off",
        "no-console": "off",
        "prettier/prettier": [
            "warn",
            {
              "endOfLine": "auto"
            }
          ],
        "import/order": [
            "error",
            {
                "newlines-between": "never",
                groups: [
                    ["builtin", "external"],
                    ["internal", "parent", "sibling", "index"],
                ]
            }
        ]
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": ['.ts'],
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: "./tsconfig.json"
            }
        }
    }
}
