import React from 'react'
import { 
    PaginationBG, PaginationBtn, Paginationdiv,
} from '../../styles/List/Pagination.style'

function Pagination(props) {
    // Related with pagination
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 8
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = props.count
    const npage = Math.ceil(props.count / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    return (
        <PaginationBG>
            <Paginationdiv>
                
            </Paginationdiv>
        </PaginationBG>
    )
}

export default Pagination