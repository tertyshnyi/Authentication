import React from 'react';
import style from './products.module.css';

type Props = {}

const products = (props: Props) => {
    return (
        <div className={style.product__content}>
            <h3 className={style.title__container}>Our products</h3>
            <div className={style.product__items}>
                <div className={style.item}>
                    <img src='https://www.unimay.media/storage/images/16' alt='Poster' />
                    <div className={style.product_info}>
                        <h3>Людина-бензопила</h3>
                        <p>Тип: Телесеріал (12 eп.), 24 хв.</p>
                        <p>Жанри: Жахи, Демони, Бойовик, Пригоди, Драма</p>
                    </div>
                </div>
                <div className={style.item}>
                    <img src='https://www.unimay.media/storage/images/56' alt='Poster' />
                    <div className={style.product_info}>
                        <h3>Привид Літа</h3>
                        <p>Тип: Фільм 40 хв.</p>
                        <p>Жанри: Драма, Надприродне</p>
                    </div>
                </div>
                <div className={style.item}>
                    <img src='https://www.unimay.media/storage/images/19' alt='Poster' />
                    <div className={style.product_info}>
                        <h3>Неосяжний океан</h3>
                        <p>Тип: Телесеріал (12 eп.), 24 хв.</p>
                        <p>Жанри: Комедія, Повсякденність, Сейнен</p>
                    </div>
                </div>
                <div className={style.item}>
                    <img src='https://www.unimay.media/storage/images/23' alt='Poster' />
                    <div className={style.product_info}>
                        <h3>Реінкарнація безробітного</h3>
                        <p>Тип: Телесеріал (23 eп.), 24 хв.</p>
                        <p>Жанри: Пригоди, Драма, Надприродне</p>
                    </div>
                </div>
                <div className={style.item}>
                    <img src='https://www.unimay.media/storage/images/35' alt='Poster' />
                    <div className={style.product_info}>
                        <h3>86 Вісімдесят шість</h3>
                        <p>Тип: Телесеріал (12 eп.), 24 хв.</p>
                        <p>Жанри: Драма, Фантастика</p>
                    </div>
                </div>
                <div className={style.item}>
                    <img src='https://www.unimay.media/storage/images/38' alt='Poster' />
                    <div className={style.product_info}>
                        <h3>Ця порцелянова лялечка закохалася</h3>
                        <p>Тип: Телесеріал (12 eп.), 24 хв.</p>
                        <p>Жанри: Школа, Романтика, Повсякденність, Сейнен</p>
                    </div>
                </div>
                <div className={style.item}>
                    <img src='https://www.unimay.media/storage/images/53' alt='Poster' />
                    <div className={style.product_info}>
                        <h3>До лісу мерехтіння світлячків</h3>
                        <p>Тип: Фільм 45 хв.</p>
                        <p>Жанри: Драма, Романтика, Надприродне</p>
                    </div>
                </div>
                <div className={style.item}>
                    <img src='https://www.unimay.media/storage/images/58' alt='Poster' />
                    <div className={style.product_info}>
                        <h3>Токійські Хрещен</h3>
                        <p>Тип: Фільм 93 хв.</p>
                        <p>Жанри: Комедія, Драма</p>
                    </div>
                </div>
                <div className={style.item}>
                    <img src='https://www.unimay.media/storage/images/79' alt='Poster' />
                    <div className={style.product_info}>
                        <h3>Твоє Ім'я</h3>
                        <p>Тип: Фільм 107 хв.</p>
                        <p>Жанри: Пригоди, Драма, Романтика, Надприродне</p>
                    </div>
                </div>
                <div className={style.item}>
                    <img src='https://www.unimay.media/storage/images/63' alt='Poster' />
                    <div className={style.product_info}>
                        <h3>Татки Братки</h3>
                        <p>Тип: Телесеріал (12 eп.), 24 хв.</p>
                        <p>Жанри: Комедія</p>
                    </div>
                </div>
                <div className={style.item}>
                    <img src='https://www.unimay.media/storage/images/65' alt='Poster' />
                    <div className={style.product_info}>
                        <h3>Кіберпанк: ТІ хто біжать по краю</h3>
                        <p>Тип: Телесеріал (10 eп.), 26 хв.</p>
                        <p>Жанри: Фантастика</p>
                    </div>
                </div>
                <div className={style.item}>
                    <img src='https://www.unimay.media/storage/images/80' alt='Poster' />
                    <div className={style.product_info}>
                        <h3>Магічна битва 0 Фільм</h3>
                        <p>Тип: Фільм 105 хв.</p>
                        <p>Жанри: Демони, Фентезі, Сейнен</p>
                    </div>
                </div>
                <div className={style.item}>
                    <img src='https://www.unimay.media/storage/images/105' alt='Poster' />
                    <div className={style.product_info}>
                        <h3>Парад Смерті</h3>
                        <p>Тип: Телесеріал (12 eп.), 23 хв.</p>
                        <p>Жанри: Драма</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default products;