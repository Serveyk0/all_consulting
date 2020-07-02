export interface href
{
    name: string
    name_href: string
    item_array: Array<string>
    item_href: Array<string>
}

const href_component_1 : Array<href> =
[
    {
        name: "Бухгалтерські послуги",
        name_href: "/accounting_events",
        item_array: ["Податковий консалтинг", "Кадровий облік", "Бухгалтерський супровід", "Бухгалтерська звітність"],
        item_href: 
        [
            "/accounting_events/tax_consulting",
            "/accounting_events/personnel_accounting", 
            "/accounting_events/accounting_support", 
            "/accounting_events/accounting"
        ]
    },
    {
        name: "Event-management",
        name_href: "/event-management",
        item_array: ["Організація форумів, конференцій, семінарів", "Організація виставок та фестивалів", "Організація тренінгів, майстер-класів"],
        item_href: 
        [
            "/event-management/forums", 
            "/event-management/festivals", 
            "/event-management/tranings"
        ]
    },
    {
        name: "Ліцензування",
        name_href: "/licensing",
        item_array: ["Ліцензування освітньої діяльності", "Погодження і реєстрація зовнішньої реклами", "Набуття права інтелектуальної власності"],
        item_href: 
        [
            "/licensing/educational_activity", 
            "/licensing/outdoor_advertising", 
            "/licensing/intellectual_property"
        ]
    }
]

const href_component_2: Array<href> = 
[
    {
        name: "Юридичні послуги",
        name_href: "/legal_services",
        item_array: ["Реєстрація юридичної особи", "Ліквідація юридичної особи", "Розробка договорів", "Посадові інструкії"],
        item_href: 
        [
            "/legal_services/registration_of_a_legal_entity", 
            "/legal_services/liquidation_of_a_legal_entity", 
            "/legal_services/development_of_contracts", 
            "/legal_services/job_descriptions"
        ]
    },  
    {
        name: "Паспортно-візові послуги",
        name_href: "/passport_and_visa_services",
        item_array: ["Оформлення посвідки на тимчасове проживання", "Оформлення посвідки на постійне проживання", 
        "Реєстрація місця проживання", "Страхування на період перебування в Україні", "Запрошення (робочі, комерційні)"],
        item_href: 
        [
            "/passport_and_visa_services/temporary_residence", 
            "/passport_and_visa_services/permanent_residence", 
            "/passport_and_visa_services/registration_of_residence",
            "/passport_and_visa_services/insurance",
            "/passport_and_visa_services/invitation",
        ]
    },
]

export const href_component_array: Array<Array<href>> = [href_component_1, href_component_2];