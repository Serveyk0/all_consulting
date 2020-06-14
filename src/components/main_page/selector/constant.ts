export interface select_object {
    item: string
    description: string
}

export interface form {
    field_1: string
    field_2: string
    field_3: string
    field_4: string
    field_5: string
}

const about_company: select_object = 
{
    item: "О компании",
    description: "Более 13 лет компания «Сервис-Консалтинг» предоставляет высококачественные юридические услуги в Москве. За все это время наша компания заслужила репутацию надежного и стабильного партнера. Постоянное сотрудничество с миграционной службой, опыт и знания позволяют нам давать клиентам консультации по главным проблемам и вопросам, связанных с трудовой деятельностью мигрантов в нашей стране."
}

const request_call: select_object = 
{
    item: "Заказать звонок",
    description: "form_request_call"
}

const consultation: select_object = 
{
    item: "Консультация",
    description: "form_consultation"
}

export const selection_array: Array<select_object> = [about_company, request_call, consultation];

export const form_request_call: form = 
{
    field_1: "Организация",
    field_2: "Контактное лицо",
    field_3: "Телефон",
    field_4: "Удобное время",
    field_5: "Тема звонка"
}

export const form_consultation: form = 
{
    field_1: "Организация",
    field_2: "Контактное лицо",
    field_3: "Телефон",
    field_4: "Электронная почта",
    field_5: "Сообщение"
}
