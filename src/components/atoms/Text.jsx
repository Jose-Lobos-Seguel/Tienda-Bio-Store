import React from "react";

function Text({ children, variant = "p", classname }){
    const Tag = variant;
    return <Tag classname={classname}>{children}</Tag>;
}

export default Text;