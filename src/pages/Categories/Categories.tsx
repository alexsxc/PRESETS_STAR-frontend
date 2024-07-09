import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import './Categories.css'

function Categories() {
    return (
        <>
            <main className="main-bg">
        <main className="container">
            <Header />
            <main className="categories">
                <div className="categories__search">
                    <div className="input-element">
                        <input className="input" type="text" placeholder="Что вы ищете?" />
                        <button className="search-button">
                            <img src="images/search.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className="select">
                    <ul className="categories__select">
                        <li value="1" className="categories__select-li Solid">Solid</li>
                        <li value="2" className="categories__select-li Creative">Creative</li>
                        <li value="3" className="categories__select-li Wide">Wide</li>
                        <li value="4" className="categories__select-li Spread">Spread</li>
                        <li value="5" className="categories__select-li Dirty">Dirty</li>
                        <li value="6" className="categories__select-li Clean">Clean</li>
                        <li value="7" className="categories__select-li Distorted">Distorted</li>
                    
                        <button className="right__select"><img src="images/right.svg" /></button>
                    </ul>
                </div>
            </main>
            <div className="card root"></div>
        </main>
    </main>
    <main className="main">
        <div className="container">
            <section>
                <hr className="line" />
                <h2 className="h2">В ТРЕНДЕ</h2>
                <div className="card root"></div>
                <div className="flex-end">
                    <button className="button">Увидеть больше</button>
                </div>
            </section>
            <div className="gradient">
                <section className="main_descr">
                    <h2 className="h2 main_descr-h2">Почему же пресеты в музыкальной индустрии являются преимуществом?</h2>
                    <div className="main_descr-flex">
                        <div className="main_descr-text">
                            <p>
                                1. Экономия времени: Использование готовых пресетов позволяет сэкономить много времени
                                при создании музыки, так как они предварительно настроены и оптимизированы для
                                конкретного звука или инструмента. Это особенно полезно при работе с программными
                                синтезаторами или сэмплами.
                            </p>
                            <p>
                                2. Профессиональное звучание: Пресеты, предоставляемые в профессиональных аудио-плагинах
                                или программном обеспечении, обычно разработаны опытными звукоинженерами и продюсерами,
                                поэтому они обеспечивают высокое качество звучания.
                            </p>
                            <p>
                                3. Вдохновение и творчество: Пресеты могут быть хорошей источником вдохновения для
                                создания новых музыкальных идей. Они могут предложить новые звуки или звуковые
                                комбинации, которые могут стать отправной точкой для создания оригинальной музыки.
                            </p>
                        </div>
                        <div className="main_descr-img"><img src="images/Rectangle23.png" alt="" /></div>
                    </div>
                </section>
                <button className="button button-descr">Читать полностью</button>
            </div>
            <section className="presets">
                <h2 className="h2">Пресеты</h2>
                <div className="card root"></div>
                <div className="flex-end">
                    <button className="button">Посмотреть все</button>
                </div>
            </section>
            <section className="reviews">
                <button id="prev"><img className="prev_slide" src="images/left.svg" /></button>
                <div className="reviews_slider">
                    <div className="slider-wrapper">
                        <div className="slide">
                            <div className="review_content">
                                <div className="review_text">Рекомендую этот магазин всем музыкантам и продюсерам,
                                    нуждающимся в качественных пресетах для своих проектов.</div>
                                <div className="autor-reviews">
                                    <div><img src="images/score.svg" /></div>
                                    <div><img src="images/coolmusic.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="review_content">
                                <div className="review_text">Рекомендую этот магазин всем музыкантам и продюсерам,
                                    нуждающимся в качественных пресетах для своих проектов.</div>
                                <div className="autor-reviews">
                                    <div><img src="images/score.svg" /></div>
                                    <div><img src="images/coolmusic.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="review_content">
                                <div className="review_text">Рекомендую этот магазин всем музыкантам и продюсерам,
                                    нуждающимся в качественных пресетах для своих проектов.</div>
                                <div className="autor-reviews">
                                    <div><img src="images/score.svg" /></div>
                                    <div><img src="images/coolmusic.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button id="next"><img className="next_slide" src="images/right.svg" /></button>
            </section>
            <section className="form">
                <div className="form-element">
                    <h2 className="h2">ПОДПИШИТЕСЬ НА РАССЫЛКУ ЧТОБЫ УЗНАВАТЬ О НОВИНКАХ ПЕРВЫМ</h2>
                    <form method="post" className="input-element">
                        <input className="input input-post" type="text" placeholder="Ваш e-mail" />
                        <button className="button button-post">Подписаться</button>
                    </form>
                </div>
            </section>
        </div>
    </main>
    <Footer />
        </>
    )
}

export default Categories