const React = require("react")

function DefualtLayout(html){
    return (
        <html>
            <head>
                <title>{html.title || "Default Layout"}</title>
            </head>
            <body>
                
                {html.children}
            </body>
        </html>
    )
}

module.exports = DefualtLayout;