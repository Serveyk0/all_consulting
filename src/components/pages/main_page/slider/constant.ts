import first from "../../../../media/main_page/slider/1.png";
import second from "../../../../media/main_page/slider/2.png";
import third from "../../../../media/main_page/slider/3.png";
import fourth from "../../../../media/main_page/slider/4.png";

export interface slide
{
    title_1: string
    title_2: string
    img: string
    img_alt: string
}

const slide_1: slide = 
{
    title_1:"Деловые предложения",
    title_2:"Компетентная всесторонняя поддержка!",
    img:first,
    img_alt:"Поддержка"
}

const slide_2: slide = 
{
    title_1:"Паспортно-визовые услуги",
    title_2:"Ваше доверие - лучшая поддержка!",
    img:second,
    img_alt:"Паспортно-визовые услуги"
}

const slide_3: slide = 
{
    title_1:"Аутстаффинг",
    title_2:"Ваша экономия 34%!",
    img:third,
    img_alt:"Аутстаффинг"
}

const slide_4: slide = 
{
    title_1:"Разрешение на работу",
    title_2:"Легально! Быстро! Удобно!",
    img:fourth,
    img_alt:"Разрешение на работу"
}

export const slides_array: Array<slide> =
[
    slide_1,
    slide_2,
    slide_3,
    slide_4
]