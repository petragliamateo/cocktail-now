import Head from "next/head";

function Meta({title}){
    return(
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: "Cocktails",
}

export default Meta;