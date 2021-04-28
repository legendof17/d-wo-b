import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>{'D-WO=>B'}</h1>
            <p>It's a project about Database-without-Backend</p>
            <Link to="/database">
                <button>Start</button>
            </Link>
        </div>
    )
}

export default Home
