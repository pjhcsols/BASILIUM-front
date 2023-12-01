import React, { useState } from 'react'
import { 
    Cart,
    CartBox,
    Category,
    CategoryBox,
    Content,
    ContentBar,
    ContentText,
    HeaderBG, 
    HeaderGrid, 
    Logo, 
    LogoBox,
    Profile,
    ProfileBox,
    ProfileContentBox,
    ProfileText,
    ProfileToggleBox,
    XbarIMG
} from './Header.style'
import CategoryList from './CategoryList/CategoryList';

function Header(props) {
    const [IsClicked, setIsClicked] = useState(false);
    const [IsClickedCart, setIsClickedCart] = useState(false);
    const [IsClickedProfile, setIsClickedProfile] = useState(false);
    const [IsBrandUser, setIsBrandUser] = useState(false);

    const ContentList = () => {
        let list = [];
        let contentlist = ['About', 'Brand', 'Store', 'Search'];
        contentlist.forEach((value,i)=>{
            if(value==='Brand'){
                list.push(
                    <>
                        <Content
                            key={i}
                        >
                            <ContentText>
                            {value}
                            </ContentText>
                        </Content>
                        <LogoBox>
                            <Logo />
                        </LogoBox>
                    </>
                )
            }else{
                list.push(
                    <Content
                        key={i}
                    >
                        <ContentText>
                        {value}
                        </ContentText>
                    </Content>
                )
            }
        });
        return list;
    }

    const ProfileList = () => {
        let list = [];
        let ProfileTextList = ['My Page', 'Product Registeration' ,'Logout'];
        ProfileTextList.forEach((value,i)=>{
            if(value === 'Product Registeration'){
                if(IsBrandUser){
                    list.push(
                        <ProfileContentBox key={i}>
                            <ProfileText>
                                {value}
                            </ProfileText>
                        </ProfileContentBox>   
                    )
                }
            }else{
                list.push(
                    <ProfileContentBox key={i}>
                        <ProfileText>
                            {value}
                        </ProfileText>
                    </ProfileContentBox>
                )
            }
        })
    }

    const onClickCategory = (e) => {
        e.preventDefault();
        setIsClicked((prev)=>!prev);
    }

    const onClickCart = (e) => {
        e.preventDefault();
        setIsClickedCart((prev)=>!prev);
    }

    const onClickProfile = (e) => {
        e.preventDefault();
        setIsClickedProfile((prev)=>!prev);
    }

    return (
        <HeaderBG IsScroll={props.IsScroll}>
            <HeaderGrid>
                <CategoryBox onClick={onClickCategory}>
                {
                    IsClicked ?
                    <>
                        <XbarIMG />
                        <CategoryList />
                    </>
                    :
                    <>
                        <Category />
                    </>
                }
                </CategoryBox>
                <ContentBar>
                {
                    ContentList()
                }
                </ContentBar>
                <CartBox>
                    <Cart 
                        onClick={onClickCart}
                    />
                </CartBox>
                <ProfileBox>
                    <Profile 
                        onClick={onClickProfile}
                    />
                    {
                        IsClickedProfile ? 
                        <ProfileToggleBox
                            IsBrandUser={IsBrandUser}
                        >
                        {
                            ProfileList()
                        }
                        </ProfileToggleBox>
                        :
                        <>
                        </>
                    }
                </ProfileBox>
            </HeaderGrid>
        </HeaderBG>
    )
}

export default Header