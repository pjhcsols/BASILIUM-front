import React, { useRef, useState } from 'react'
import { Search, SearchBarBG, SearchBarBox } from '../styles/Header/SearchBar.style'
import { useNavigate } from 'react-router-dom'

function SearchBar() {
    const navi = useNavigate()
    const [SearchContent, SetSearchContent] = useState('')
    const onChangeContent = (e) => {
        SetSearchContent(e.target.value)
    }
    return (
        <SearchBarBG>
            <Search
                type="text" 
                onChange={onChangeContent} 
                value={SearchContent}
                placeholder='화이트 맨투맨'
            />
        </SearchBarBG>
    )
}

export default SearchBar