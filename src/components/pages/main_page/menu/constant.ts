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
        name: "Паспортно-визовые услуги",
        name_href: "passport_and_visa_services",
        item_array: ["Деловые приглашения", "Коммерческие приглашения", "Рабочие приглашеня", "Переоформление рабочих виз"],
        item_href: 
        [
            "business_invitations",
            "commercial_invitations", 
            "work_invitations", 
            "renewal_of_work_visas"
        ]
    },
    {
        name: "Дополниетльные услуги",
        name_href: "additional_services",
        item_array: ["Аутстаффинг", "Кадровые услуги", "Нотариальные переводы", "Медицинские услуги", "Бухалтерское и кадровое сопровождение"],
        item_href: 
        [
            "outstaffing", 
            "personnel_services", 
            "notary_translations", 
            "medical_services", 
            "accounting_and_personnel_support"
        ]
    }
]

const href_component_2: Array<href> = 
[
    {
        name: "Меню 2",
        name_href: "menu_2",
        item_array: ["подменю 1", "подменю 2", "подменю 3"],
        item_href: 
        [
            "outstaffing", 
            "personnel_services", 
            "accounting_and_personnel_support"
        ]
    },
    {
        name: "Меню 3",
        name_href: "menu_3",
        item_array: ["подменю 1", "подменю 2", "подменю 3"],
        item_href: 
        [
            "outstaffing", 
            "personnel_services", 
            "accounting_and_personnel_support"
        ]
    },
    {
        name: "Меню 4",
        name_href: "menu_4",
        item_array: ["подменю 1", "подменю 2", "подменю 3"],
        item_href: 
        [
            "outstaffing", 
            "personnel_services", 
            "notary_translations"
        ]
    }
]

export const href_component_array: Array<Array<href>> = [href_component_1, href_component_2];