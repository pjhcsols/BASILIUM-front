import React, { useState } from 'react'
import { 
    Category,
    CategoryBox,
    Content,
    ContentBar,
    ContentText,
    HeaderBG, 
    Logo, 
    LogoBox, 
    Xbar
} from './Header.style'

function Header(props) {
    const [IsClicked, setIsClicked] = useState(false);

    const ContentList = () => {
        let list = [];
        let contentlist = ['About', 'Brand', 'Store', 'Search'];
        contentlist.forEach((value,i)=>{
            list.push(
                <Content>
                    <ContentText>
                    {value}
                    </ContentText>
                </Content>
            )
        });
    }
    return (
        <HeaderBG IsScroll={props.IsScroll}>
            <CategoryBox>
            {
                IsClicked ?
                <>
                    <Category />
                </>
                :
                <>
                    <Xbar />
                </>
            }
            </CategoryBox>
            <ContentBar>
            {
                ContentList()
            }
            </ContentBar>
            <LogoBox>
                <Logo />
            </LogoBox>
        </HeaderBG>
    )
}

export default Header