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
    title_2:"Компетентная всесторонняя поддержка!",
    img:first,
    img_alt:"Поддержка"
}

const slide_2: slide = 
{
    title_1:"EVENT-MANAGEMENT",
    title_2:"Ваше доверие - лучшая поддержка!",
    img:second,
    img_alt:"Паспортно-визовые услуги"
}

const slide_3: slide = 
{
    title_1:"ЛІЦЕНЗУВАННЯ",
    title_2:"Ваша экономия 34%!",
    img:third,
    img_alt:"Аутстаффинг"
}

const slide_4: slide = 
{
    title_1:"ПАСПОРТНО-ВІЗОВІ ПОСЛУГИ",
    title_2:"Легально! Быстро! Удобно!",
    img:fourth,
    img_alt:"Разрешение на работу"
}

const slide_5: slide = 
{
    title_1:"ЮРИДИЧНІ ПОСЛУГИ",
    title_2:"Легально! Быстро! Удобно!",
    img:fifth,
    img_alt:"Разрешение на работу"
}

export const slides_array: Array<slide> =
[
    slide_1,
    slide_2,
    slide_3,
    slide_4,
    slide_5
]