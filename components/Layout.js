import Meta from "./Meta";
import Nav from "./Nav"
import Footer from "./Footer"

function Layout({children}){
    return(
        <div>
            <Meta />
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;