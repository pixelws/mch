import React from "react"

export default props => (
    <div
        className="full-width-image-container margin-top-0"
        style={{
            backgroundImage: `url({props.imgPath})`,
        }}
    >
        <h1
        className="has-text-weight-bold is-size-1"
        style={{
            color: 'white',
            backgroundColor: 'rgba(135,22,56,0.8)',
            padding: '1rem 2rem',
        }}
        >
        {props.titleText}
        </h1>
    </div>
)