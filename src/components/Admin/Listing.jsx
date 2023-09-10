import React, { useRef, useState } from 'react'
import { 
    BackGround,
    InputBox,
    InputContainer,
    kiwa 
} from '../styles/Admin/Listing.style'

const Options = [
    { value : "upper", name: "상의" },
    { value : "pants", name: "하의" },
    { value : "shoes", name: "신발" },
    { value : "underwear", name: "속옷" },
    { value : "bag", name: "가방" },
    { value : "hat", name: "모자"},
    { value : "outer", name: "아우터" },
    { value : "skirt", name: "스커트" }
]

const SelectBox = (props) => {
    return (
        <select>
            {props.Options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.name}
                </option>
            ))}
        </select>
    )
}

function Listing() {
    const [showItem, SetshowItem] = useState()

    const nameRef = useRef(null)
    const priceRef = useRef(null)
    const DescRef = useRef(null)

    return (
        <BackGround>
            <kiwa>
                <InputBox>
                    <InputContainer
                        type="input"
                        value="상품명"
                        ref={nameRef}
                    />
                    <InputContainer 
                        type="input"
                        value="가격"
                        ref={priceRef}
                    />
                    <InputContainer 
                        type="input"
                        value="상세설명"
                        ref={DescRef}
                    />
                    <InputContainer
                        type="input"

                    />
                </InputBox>
            </kiwa>
        </BackGround>
    )
}

export default Listing