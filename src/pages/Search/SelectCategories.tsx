import { FormControl, InputLabel, ListSubheader, MenuItem, Select } from '@mui/material'
import React from 'react'
import useAuth from '../../hooks/useAuth'
import useNews from '../../hooks/useNews'
import { SelectCategoriesProps } from '../../types'


function SelectCategories({ data, searchParams, setSearchParams }: SelectCategoriesProps) {
    const { user } = useAuth()

    const { sourceCategories } = useNews()
    return (
        <FormControl fullWidth variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel>Category</InputLabel>
            <Select
                disabled={searchParams.source === '' || searchParams.source === 'News API'}
                value={searchParams.category}
                label="Category"
                name='category'
                onChange={(e) => setSearchParams({ ...searchParams, category: e.target.value })}
            >
                <MenuItem disabled selected value=''>
                    <em>None</em>
                </MenuItem>
                {(user) && (<ListSubheader>Favorites</ListSubheader>)}
                {(searchParams.source === 'The New York Times' && user) && (<MenuItem key={data.favoritesNYT.slug} value={data.favoritesNYT.slug}>{data.favoritesNYT.name}</MenuItem>)}
                {(searchParams.source === 'The Guardian' && user) &&  (<MenuItem key={data.favoritesGUA.slug} value={data.favoritesGUA.slug}>{data.favoritesGUA.name}</MenuItem>)}
                {(user) && (<ListSubheader>Categories</ListSubheader>)}
                {(searchParams.source === 'The New York Times' && user) && data.availableDataNYT.map((category) => (<MenuItem key={category.slug} value={category.slug}>{category.name}</MenuItem>))}
                {(searchParams.source === 'The Guardian' && user) && data.availableDataGUA.map((category) => (<MenuItem key={category.slug} value={category.slug}>{category.name}</MenuItem>))}
                {(searchParams.source === 'The New York Times' && !user) && sourceCategories.filter(s => s.source_id === 2).map((category) => (<MenuItem key={category.slug} value={category.slug}>{category.name}</MenuItem>))}
                {(searchParams.source === 'The Guardian' && !user) && sourceCategories.filter(s => s.source_id === 1).map((category) => (<MenuItem key={category.slug} value={category.slug}>{category.name}</MenuItem>))}
            </Select>
        </FormControl>
    )
}

export default SelectCategories