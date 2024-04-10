module.exports = {
    plugins: [
        "cssnano",
        "postcss-merge-rules",
        "postcss-merge-longhand",
        "@hail2u/css-mqpacker",
        "postcss-combine-duplicated-selectors",
        "css-mqpacker",
        "autoprefixer",
        "postcss-csso",
        "postcss-discard-comments"
    ],
}
