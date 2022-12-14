const React = require("react")
const DefaultLayout = require("./layouts/default")
function IndexView({ breads, title }) {
    return (
        <DefaultLayout title={title}>
            <h1>Hello from index page</h1>
            <ul>
                {
                    breads.map((bread, index) => {
                        return (
                            <li key={index}>
                                <a href={`/breads/${index}`}>
                                    {bread.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <a href="/breads/new">
                <button>Create a new bread</button>
            </a>
        </DefaultLayout>
    )
}

module.exports = IndexView;