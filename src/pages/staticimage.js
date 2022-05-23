import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Image = () => {
    return (
        <>
            <h1>Static Image</h1>
            <StaticImage alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"></StaticImage>
            <h1>Dynamic Image</h1>
        </>
    )
}

export default Image