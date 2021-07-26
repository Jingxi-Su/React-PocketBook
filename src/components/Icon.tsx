import React from "react";
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
//require整个目录

type Props = {
    name: string
}

const Icon = (props: Props) => {
    return (
        <svg className="icon">
            <use xlinkHref={'#' + props.name}/>
        </svg>
    )
};

export default Icon;