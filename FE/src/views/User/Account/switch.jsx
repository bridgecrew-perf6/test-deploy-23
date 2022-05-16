import React from "react";

export default function Switch({ active, setActive }) {
    return (
        <>
            <div className="switch" data-testid="switch-TV_NWL">
                <div className="switch-1" style={active === true ? { backgroundColor: 'rgb(1, 148, 243)' } : { backgroundColor: 'rgb(205, 208, 209)' }} ></div>
                <div className="switch-2" style={active === true ? { marginLeft: '-20px', left: '100%' } : { marginLeft: '0px', left: '0%' }}></div>
                <div className="input-switch" onClick={() => setActive(!active)} />
            </div>
        </>
    )
}