import first from "../../../../media/main_page/slider/1.jpg";
import second from "../../../../media/main_page/slider/2.jpg";
import third from "../../../../media/main_page/slider/3.jpg";
import fourth from "../../../../media/main_page/slider/4.jpg";
import fifth from "../../../../media/main_page/slider/5.jpg";

export interface slide
{
    title_1: string
    title_2: string
    img: string
    img_alt: string
}

const slide_1: slide = 
{
    title_1:"БУХГАЛТЕРСЬКІ ПОСЛУГИ",
    title_2:"Досвід якісного обслуговування!",
    img:first,
    img_alt:"БУХГАЛТЕРСЬКІ ПОСЛУГИ"
}

const slide_2: slide = 
{
    title_1:"EVENT-MANAGEMENT",
    title_2:"Завдання. Бюджет. Результат.",
    img:second,
    img_alt:"EVENT-MANAGEMENT"
}

const slide_3: slide = 
{
    title_1:"ЛІЦЕНЗУВАННЯ",
    title_2:"Ваша экономия 34%!",
    img:third,
    img_alt:"ЛІЦЕНЗУВАННЯ"
}

const slide_4: slide = 
{
    title_1:"МІГРАЦІЙНІ ПИТАННЯ",
    title_2:"Практичне рішення міграційних питань.",
    img:fourth,
    img_alt:"МІЖНАРОДНІ ПОСЛУГИ"
}

const slide_5: slide = 
{
    title_1:"ЮРИДИЧНІ ПОСЛУГИ",
    title_2:"Професійно. Доступно. Конфіденційно",
    img:fifth,
    img_alt:"ЮРИДИЧНІ ПОСЛУГИ"
}

export const slides_array: Array<slide> =
[
    slide_1,
    slide_2,
    slide_3,
    slide_4,
    slide_5
]