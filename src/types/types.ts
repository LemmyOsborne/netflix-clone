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

export interface IProfile {
    displayName: string | null | undefined
    photoURL: string | null | undefined
  }