import React from 'react'

const Sidebar = ({setChannel}) => {
    return (
        <div className="menu">
            <li className="menu__link" onClick= {() => setChannel("SVT 1")}>SVT 1</li>
            <li className="menu__link" onClick= {() => setChannel("SVT 2")}>SVT 2</li>
            <li className="menu__link" onClick= {() => setChannel("SVT Barn")}>SVT Barn</li>
            <li className="menu__link" onClick= {() => setChannel("Kunskapskanalen")}>Kunskapskanalen</li>
            <li className="menu__link" onClick= {() => setChannel("SVT 24")}>SVT 24</li>
        </div>
    )
}

export default Sidebar;


{/* <a className="menu__link" onClick= {() => setChannel("SVT 1")}>SVT 1</a>
<a className="menu__link" onClick= {() => setChannel("SVT 2")}>SVT 2</a>
<a className="menu__link" onClick= {() => setChannel("SVT Barn")}>SVT Barn</a>
<a className="menu__link" onClick= {() => setChannel("Kunskapskanalen")}>Kunskapskanalen</a>
<a className="menu__link" onClick= {() => setChannel("SVT 24")}>SVT 24</a> */}