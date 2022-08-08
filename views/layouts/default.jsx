const React = require("react")

function DefualtLayout(html){
    return (
        <html>
            <head>
                <title>{html.title || "Default Layout"}</title>
            </head>
            <body>
                <h1>Hello from default layout</h1>
                {html.children}
            </body>
        </html>
    )
}

module.exports = DefualtLayout;