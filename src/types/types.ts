export interface IContent {
    id: number 
    description: string
    genre: string
    maturity: string
    slug: string
    title: string
}

export interface FormInputContext {
    togglePlaceholder: boolean
    setTogglePlaceholder: React.Dispatch<React.SetStateAction<boolean>>
}