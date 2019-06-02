import React from "react"

export default props => (
    <div
        className="pg-head margin-top-0"
        style={{
            backgroundImage: 'url(' + props.imgPath + ')',
        }}
    >
        <div className="container">
            <div className="title-wrap">
                <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-desktop is-family-secondary"
                >
                {props.titleText}
                </h1>
            </div>
        </div>
    </div>
)