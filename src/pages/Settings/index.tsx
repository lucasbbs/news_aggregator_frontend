import React from 'react'
import { BoxContainer, FormContainer, Input, StyledExpandMore, SubmitButton } from './styles'
import { Autocomplete, Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import useMessages from '../../hooks/useMessages'
import { saveUserFavorites } from '../../services/favorite-categories.services'
import { updatePassword } from '../../services/user.services'
import { TypedCategories } from '../../components/TypedCategories'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { createTag, deleteTag } from '../../services/tag.services'
import useSettings from '../../hooks/useSettings'
import { createSettings } from '../../services/settings.services'
import useNews from '../../hooks/useNews'
import routes from '../../routes'
import { CategoriesTags } from '../../types'

function Settings() {
  const { setLocation } = useNews()
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [value, setValue] = React.useState('')
  const { showMessage } = useMessages()
  const { data, setData } = useSettings()

  React.useEffect(() => {
    setLocation(routes.SettingsPath.relativePath)
  }, [setLocation])


  const handleSubmitCategories = async (e: React.FormEvent<HTMLFormElement>, category: any, sourceId: number) => {
    e.preventDefault()
    try {
      await Promise.all([await saveUserFavorites(category.id, sourceId), await createSettings(sourceId, (e.target as HTMLFormElement).sort?.value, (e.target as HTMLFormElement).source?.value)])
      showMessage('Favorites saved successfully', 'success')
    } catch (error) {
      console.log(error)
      showMessage('Error saving favorites', 'error')
    }
  }

  const handleSubmitPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const password = (e.target as HTMLFormElement).password.value
    const confirm_password = (e.target as HTMLFormElement).confirm_password.value
    try {
      await updatePassword(password, confirm_password);
      showMessage('Password updated successfully', 'success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      showMessage('Error updating password', 'error')
    }
  }

  const handleSubmitTag = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await createTag(data.categories.map((c) => c.tag_name))
      showMessage('Tag saved successfully', 'success')
    } catch (error) {
      showMessage('Error saving tag', 'error')
    }
  }

  const handleTagInputKeyPress = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (!data.categories.map((c) => c.tag_name.toLowerCase()).includes(value.trim().toLowerCase())) {
        const categories = [...data.categories, { id: null, tag_name: value.trim() }]
        setData({ ...data, categories })
      }
      setValue('')
    }
  }

  const removeCategory = async (t: CategoriesTags) => {
    try {
      if (t.id) {
        await deleteTag(t.id)
      }
      const categories = data.categories.filter((tt: CategoriesTags) => tt.tag_name !== t.tag_name)
      setData({ ...data, categories })
      showMessage('Tag deleted successfully', 'success')
    } catch (error) {
      showMessage('Error deleting tag', 'error')
    }
  }

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <BoxContainer>
      <Accordion sx={{ width: '100%' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<StyledExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          Change password
        </AccordionSummary>
        <AccordionDetails>
          <FormContainer onSubmit={handleSubmitPassword}>
            <Input type='password' name='password' placeholder="Change password" />
            <Input type='password' name='confirm_password' placeholder="Confirm password" />
            <SubmitButton>Save</SubmitButton>
          </FormContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: '100%' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<StyledExpandMore />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          Favorite Categories: The New York Times
        </AccordionSummary>
        <AccordionDetails>
          <FormContainer onSubmit={(e) => handleSubmitCategories(e, data.favoritesNYT, 2)}>
            <Autocomplete
              value={data.favoritesNYT}
              onChange={(event: React.SyntheticEvent<Element, Event>, newValue: any[]) => {
                setData({ ...data, favoritesNYT: newValue })
              }}
              filterSelectedOptions
              options={data.availableDataNYT}
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <li {...props} key={option.id}>
                  {option.name}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Favorite Categories"
                />
              )}
            />
            <Box
              display='flex'
            >
              <FormControl variant="standard" sx={{ minWidth: 120, width: '50%' }}>
                <InputLabel>Sort</InputLabel>
                <Select
                  value={data.NYTSettings?.sort}
                  label="Sort"
                  name='sort'
                  onChange={(e) => setData({ ...data, NYTSettings: { ...data.NYTSettings, sort: e.target.value } })}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='newest'>Newest</MenuItem>
                  <MenuItem value='oldest'>Oldest</MenuItem>
                  <MenuItem value='relevance'>Relevance</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ minWidth: 120, width: '50%' }}>
                <InputLabel>Source</InputLabel>
                <Select
                  value={data.NYTSettings?.source}
                  onChange={(e) => setData({ ...data, NYTSettings: { ...data.NYTSettings, source: e.target.value } })}
                  label="Source"
                  name='source'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='The New York Times'>The New York Times</MenuItem>
                  <MenuItem value='AP'>AP</MenuItem>
                  <MenuItem value='CNBC'>CNBC</MenuItem>
                  <MenuItem value='Reuters'>Reuters</MenuItem>
                  <MenuItem value='International Herald Tribune'>International Herald Tribune</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <SubmitButton>Save</SubmitButton>
          </FormContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: '100%' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<StyledExpandMore />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          Favorite Categories: The Guardian
        </AccordionSummary>
        <AccordionDetails>
          <FormContainer onSubmit={(e) => handleSubmitCategories(e, data.favoritesGUA, 1)}>
            <Autocomplete
              value={data.favoritesGUA}
              onChange={(event: React.SyntheticEvent<Element, Event>, newValue: any) => {
                setData({ ...data, favoritesGUA: newValue });
              }}
              filterSelectedOptions
              options={data.availableDataGUA}
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <li {...props} key={option.id}>
                  {option.name}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Favorite Categories"
                />
              )}
            />
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
              <Select
                value={data.GUASettings?.sort}
                onChange={(e) => setData({ ...data, GUASettings: { ...data.GUASettings, sort: e.target.value } })}
                name='sort'
                label="Sort"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value='newest'>Newest</MenuItem>
                  <MenuItem value='oldest'>Oldest</MenuItem>
                  <MenuItem value='relevance'>Relevance</MenuItem>
              </Select>
            </FormControl>
            <SubmitButton>Save</SubmitButton>
          </FormContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: '100%' }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<StyledExpandMore />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          Favorite Categories: News Api
        </AccordionSummary>
        <AccordionDetails>
          <FormContainer onSubmit={handleSubmitTag}>
            <Input placeholder='Type category name and press enter to save' name='tag' value={value} onKeyPress={handleTagInputKeyPress} onChange={(e) => {
              setValue(e.target.value)
            }} />
            <div
              style={{
                marginTop: '0.5rem',
                display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap'
              }}>
              <TypedCategories categories={data.categories} removeCategory={removeCategory} />
            </div>
            <SubmitButton>Save</SubmitButton>
          </FormContainer>
        </AccordionDetails>
      </Accordion>
    </BoxContainer>
  )
}

export default Settings