const React = require("react")

function DefualtLayout(html){
    return (
        <html>
            <head>
                <title>{html.title || "Default Layout"}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"/>
                <link rel="stylesheet" href="/main.css"/>
            </head>
            <body>
                
                {html.children}
            </body>
        </html>
    )
}

module.exports = DefualtLayout;