const React = require("react")
const DefaultLayout = require("./layouts/default")
function NotFoundView({ title }) {
    return (
        <DefaultLayout title={title}>
            <h1>404 Page not found</h1>
            <a href="/breads">Go home</a>
        </DefaultLayout>
    )
}

module.exports = NotFoundView;