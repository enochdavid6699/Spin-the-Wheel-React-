import React from 'react'


export default function Wheel(props) {
    return (

        <div className={`wheel ${props.isSpinning ? 'spinning' : ''}`}
            onClick={() => (props.spinCount > 100 ? props.setCoupon('Try Again Later') : props.spinWheel())}
        >
        </div>

    )
}
