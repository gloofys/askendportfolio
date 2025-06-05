// src/components/WhatSetsMeApart.jsx
import React from "react";
import "../styles/components/WhatSetsMeApart.scss";

const cards = [
    {
        title: "Purpose-driven",
        image: "/rand_fred_resize.jpg",
        description:
            "I approach each project with a clear goal and user-focused mindset. This helps build strong, purposeful solutions that deliver real value.",
    },
    {
        title: "Quality-assured",
        image: "/fred_ung_censored_recrop.jpg",
        description:
            "I focus on clean code, scalable structure, and consistent testing to ensure everything I deliver is reliable and maintainable.",
    },
    {
        title: "Future-resilient",
        image: "/fred_putt_resize.jpg",
        description:
            "I stay up-to-date with modern tools and best practices to make sure the solutions I build are ready for tomorrow.",
    },
];

const WhatSetsMeApart = () => {
    return (
        <section className="what-sets-me-apart" id="unique">
            <h3 className="section-title">What sets me apart</h3>
            <div className="cards-row">
                {cards.map((card, i) => (
                    <article key={i} className="card">
                        <div className="card__image">
                            <img src={card.image} alt={`${card.title} image`} />
                        </div>
                        <h4 className="card__title">{card.title}</h4>
                        <p className="card__description">{card.description}</p>
                    </article>
                ))}
            </div>

        </section>
    );
};

export default WhatSetsMeApart;
