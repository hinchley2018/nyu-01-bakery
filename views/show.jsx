const React = require("react")
const DefaultLayout = require("./layouts/default")

function ShowView({bread}){
    return (
        <DefaultLayout title="Show Details">
            <h2>Show details for {bread.name} bread</h2>
            <a href="/breads">Go Home</a>
            <p>
                and it 
                {
                    bread.hasGluten
                    ?
                    <span> does have gluten</span>
                    : <span> does not have gluten</span>
                }
            </p>
            <img src={bread.image} alt="Bread image" width={"100px"} height={"100px"}/>
            
        </DefaultLayout>
    )
}

module.exports = ShowView