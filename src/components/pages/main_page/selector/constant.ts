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

const about_company: select_object = 
{
    item: "О нас",
    description: "Более 13 лет компания «Сервис-Консалтинг» предоставляет высококачественные юридические услуги в Москве. За все это время наша компания заслужила репутацию надежного и стабильного партнера. Постоянное сотрудничество с миграционной службой, опыт и знания позволяют нам давать клиентам консультации по главным проблемам и вопросам, связанных с трудовой деятельностью мигрантов в нашей стране."
}

const request_call: select_object = 
{
    item: "Заказать звонок",
    description: ""
}

export const selection_array: Array<select_object> = [about_company, request_call];