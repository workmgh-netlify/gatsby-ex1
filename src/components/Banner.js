import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Biodiversity of Togo</h1>
            </header>
            <div className="content">
                <p>The Atlas of Living Togo allows you to the biodiversity of Togo</p>
                <ul className="actions">
                    <li><a href="/occurrences" className="button next scrolly">Start exploring</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
