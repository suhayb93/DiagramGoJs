import React, { useState } from 'react';
import "./_search-result.scss"

function Card({ search_result }) {


    const [showMore, setShowMore] = useState(false);

    function showContent(mode) {
        if (mode === 'less') {
            setShowMore(false)
        } else {
            setShowMore(true)
        }
    }

    return (
        <div className='search-reasult mb-4 '>
            <article className="card p-3" x-data="{ openAbstract: false, openKeywords: false, showCSOKeywords: false}">
                <div className="card-content">
                    <p className="title">{search_result?.title}</p>
                    {/* <p className="title">
                        {search_result?.url ?
                            <a href={`${search_result?.url}`}>{search_result?.title}</a>
                            : search_result?.titlediagram-component
                        }
                    </p> */}
                    <p className="subtitle">{`${search_result?.authors}, ${search_result?.publication_date}`} </p>
                </div>
                <div className="card-content">
                    <div className="content">
                        {showMore ?
                            <p className="card__text">
                                {search_result?.abstract}
                                <button
                                    type="button"
                                    className="card__show-more"
                                    onClick={() => showContent('less')}
                                >
                                    Show less
                                </button>
                            </p>
                            : null}


                        {!showMore ?
                            <p className="card__text">
                                {search_result?.snippet}
                                <button
                                    type="button"
                                    className="card__show-more"
                                    onClick={() => showContent('more')}
                                >
                                    Show less
                                </button>
                            </p>
                            : null}


                        <p>
                            {/* {% for keyword, score in search_result.keywords_snippet.items %}
                        <a href="{% url 'search_results' %}?search_query={{ keyword | urlencode }}&source=keywords" className="button is-light is-small mb-2 {{ score|keywords_threshold }}">{{ keyword }}</a>
                        {% endfor %} */}

                            {/* {search_result?.keywords_rest?.length > 0 ?
                                <button type="button" className="card__show-more" >Show more</button>
                                :
                                <button type="button" className="card__show-more">Show less</button>

                            } */}
                            {/* <template x-if="!openKeywords">
                        </template>

                        <template x-if="openKeywords">
                            <span>
                                {% for keyword, score in search_result.keywords_rest.items %}
                                <a href="{% url 'search_results' %}?search_query={{ keyword | urlencode }}&source=keywords" className="button is-light is-small mb-2 {{ score|keywords_threshold }}">{{ keyword }}</a>
                                {% endfor %}
                            </span>
                        </template>
                        {% endif %} */}
                        </p>

                        <h6>
                            {/* <template x-if="!showCSOKeywords"> */}
                            {/* <button type="button" className="card__show-more">CSO keywords ▾</button> */}
                            {/* </template> */}

                            {/* <template x-if="showCSOKeywords"> */}
                            {/* <button type="button" className="card__show-more">CSO keywords ▴</button> */}
                            {/* </template> */}

                        </h6>

                        {/* <template x-if="showCSOKeywords" x-cloak>
                        <p>
                            {% for keyword in search_result.CSO_keywords %}
                            <a href="{% url 'search_results' %}?search_query={{ keyword | urlencode }}&source=keywords" className="button is-light is-small mb-2">{{ keyword }}</a>
                            {% endfor %}
                        </p>
                    </template> */}


                    </div>
                </div>
            </article>

        </div>

    )
}

export default Card;