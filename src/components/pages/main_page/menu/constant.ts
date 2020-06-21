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
        name_href: "/passport_and_visa_services",
        item_array: ["Деловые приглашения", "Коммерческие приглашения", "Рабочие приглашеня", "Переоформление рабочих виз"],
        item_href: 
        [
            "/passport_and_visa_services/business_invitations",
            "/passport_and_visa_services/commercial_invitations", 
            "/passport_and_visa_services/work_invitations", 
            "/passport_and_visa_services/enewal_of_work_visas"
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