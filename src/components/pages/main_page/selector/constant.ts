export interface select_object {
    item: string
    description: string
}

export type selector_props = {
    select_item: number
    set_select_item: Function
}

export interface form {
    field_1: string
    field_2: string
    field_3: string
    field_4: string
    field_5: string
    name: string
}

const about_company = 
{
    item: "Про нас",
    description: "Более 13 лет компания «Сервис-Консалтинг» предоставляет высококачественные юридические услуги в Москве. За все это время наша компания заслужила репутацию надежного и стабильного партнера. Постоянное сотрудничество с миграционной службой, опыт и знания позволяют нам давать клиентам консультации по главным проблемам и вопросам, связанных с трудовой деятельностью мигрантов в нашей стране.",
}

export const title_span = "Консалтингове агенство All Consulting";
export const other_span = " надає консультаційні послуги у формі інформаційно-консультаційного супроводу або індивідуальних консультацій.";
export const about_us_p = [
    "Наша команда виконає будь-яке завдання – від реалізації нових стратегій ведення бізнесу до оптимізації робочих процесів у вашій компанії.",
    "Ми співпрацюємо не тільки з приватними але й державними установами.",
    "Місія нашої компанії : партнерська співпраця – запорука успіху вашого бізнесу."
]

const request_call: select_object = 
{
    item: "Замовити дзвінок",
    description: ""
}


export const selection_array = [about_company, request_call];