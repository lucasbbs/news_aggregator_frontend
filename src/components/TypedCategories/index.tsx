import { CategoriesTags } from '../../types'
import { StyledCancel, StyledCategory, StyledParagraph } from './styles'

interface TypedCategoriesProps {
    categories: CategoriesTags[],
    removeCategory: (category: CategoriesTags) => void
}

export const TypedCategories = ({ categories, removeCategory }: TypedCategoriesProps) => {

    return <>
        {categories.map((t: CategoriesTags) => (
            <StyledParagraph>
                <StyledCategory>{t.tag_name}</StyledCategory>
                <StyledCancel onClick={() => removeCategory(t)} />
            </StyledParagraph>
        ))}</>
}