import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Biodiversity of Tecala</h1>
            </header>
            <div className="content">
                <p>The Atlas of Living Tecala lets you explore species in our wonderful country</p>
                <ul className="actions">
                    <li><a href="/occurrences" className="button next scrolly">Start exploring</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
