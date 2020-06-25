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
        name: "Бізнес заходи",
        name_href: "/business_events",
        item_array: ["Податковий консалтинг", "Кадровий облік", "Бухгалтерський супровід", "Переоформление рабочих виз"],
        item_href: 
        [
            "/business_events/tax_consulting",
            "/business_events/personnel_accounting", 
            "/business_events/accounting_support", 
            "/business_events/renewal_of_work_visas"
        ]
    },
    {
        name: "Дополниетльные услуги",
        name_href: "/additional_services",
        item_array: ["Аутстаффинг", "Кадровые услуги", "Нотариальные переводы", "Медицинские услуги", "Бухалтерское и кадровое сопровождение"],
        item_href: 
        [
            "/additional_services/outstaffing", 
            "/additional_services/personnel_services", 
            "/additional_services/notarized_translations", 
            "/additional_services/medical_services", 
            "/additional_services/accounting_and_personnel_support"
        ]
    }
]

const href_component_2: Array<href> = 
[
    {
        name: "Меню 2",
        name_href: "/menu_2",
        item_array: ["подменю 1", "подменю 2", "подменю 3"],
        item_href: 
        [
            "/menu_2/outstaffing", 
            "/menu_2/personnel_services", 
            "/menu_2/accounting_and_personnel_support"
        ]
    },
    {
        name: "Меню 3",
        name_href: "/menu_3",
        item_array: ["подменю 1", "подменю 2", "подменю 3"],
        item_href: 
        [
            "/menu_3/outstaffing", 
            "/menu_3/personnel_services", 
            "/menu_3/accounting_and_personnel_support"
        ]
    },
    {
        name: "Меню 4",
        name_href: "/menu_4",
        item_array: ["подменю 1", "подменю 2", "подменю 3"],
        item_href: 
        [
            "/menu_4/outstaffing", 
            "/menu_4/personnel_services", 
            "/menu_4/notary_translations"
        ]
    }
]

export const href_component_array: Array<Array<href>> = [href_component_1, href_component_2];