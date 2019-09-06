module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/recommended", // essential에서 recommended로 변경
        "@vue/prettier",
        "eslint:recommended"
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
            /*
                                "prettier/prettier": [
                                    "warn",
                                    {
                                        "semi": false,
                                        "trailingComma": "none",
                                    }
                                ]
                                */
    },
    parserOptions: {
        parser: "babel-eslint"
    }
};