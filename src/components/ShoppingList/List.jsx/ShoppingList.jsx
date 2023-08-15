import React, { useState } from 'react'

import{
    MainContainer,  
    GridContainer,
    HeaderBox,
    LogoContainer,
    ItemsContainer,
    ItemBox,
    ShopLogo,
    Item,
    IMGBox,
    Title,
    Subscription
} from '../../styles/ShoppingList/ShoppingList.style'
import Header from '../Header/Header'
import Logo from '../../../assets/LOGO.jpg'
import { NavLink } from 'react-router-dom'

function ShoppingList() {
  return (
    <MainContainer>
        <GridContainer>
            <LogoContainer>
                <NavLink to={"/"}>
                    <ShopLogo
                        src={Logo}
                        alt="ShopLogo"
                    />
                </NavLink>
            </LogoContainer>
            <HeaderBox>
                <Header />
            </HeaderBox>
            <ItemsContainer>
                <ItemBox>
                    <IMGBox>
                        <Item />
                        <Title>
                            클래식 B 주르핏 티셔츠
                        </Title>
                        <Subscription>
                            45,000원
                        </Subscription>
                    </IMGBox>
                </ItemBox>
                <ItemBox>
                    <IMGBox>
                        <Item />
                        <Title>
                            클래식 B 주르핏 티셔츠
                        </Title>
                        <Subscription>
                            45,000원
                        </Subscription>
                    </IMGBox>
                </ItemBox>
                <ItemBox>
                    <IMGBox>
                        <Item />
                        <Title>
                            클래식 B 주르핏 티셔츠
                        </Title>
                        <Subscription>
                            45,000원
                        </Subscription>
                    </IMGBox>
                </ItemBox>
                <ItemBox>
                    <IMGBox>
                        <Item />
                        <Title>
                            클래식 B 주르핏 티셔츠
                        </Title>
                        <Subscription>
                            45,000원
                        </Subscription>
                    </IMGBox>
                </ItemBox>
                <ItemBox>
                    <IMGBox>
                        <Item />
                        <Title>
                            클래식 B 주르핏 티셔츠
                        </Title>
                        <Subscription>
                            45,000원
                        </Subscription>
                    </IMGBox>
                </ItemBox>
                <ItemBox>
                    <IMGBox>
                        <Item />
                        <Title>
                            클래식 B 주르핏 티셔츠
                        </Title>
                        <Subscription>
                            45,000원
                        </Subscription>
                    </IMGBox>
                </ItemBox>
                <ItemBox>
                    <IMGBox>
                        <Item />
                        <Title>
                            클래식 B 주르핏 티셔츠
                        </Title>
                        <Subscription>
                            45,000원
                        </Subscription>
                    </IMGBox>
                </ItemBox>
                <ItemBox>
                    <IMGBox>
                        <Item />
                        <Title>
                            클래식 B 주르핏 티셔츠
                        </Title>
                        <Subscription>
                            45,000원
                        </Subscription>
                    </IMGBox>
                </ItemBox>
                <ItemBox>
                    <IMGBox>
                        <Item />
                        <Title>
                            클래식 B 주르핏 티셔츠
                        </Title>
                        <Subscription>
                            45,000원
                        </Subscription>
                    </IMGBox>
                </ItemBox>
                <ItemBox>
                    <IMGBox>
                        <Item />
                        <Title>
                            클래식 B 주르핏 티셔츠
                        </Title>
                        <Subscription>
                            45,000원
                        </Subscription>
                    </IMGBox>
                </ItemBox>
                <ItemBox>
                    <IMGBox>
                        <Item />
                        <Title>
                            클래식 B 주르핏 티셔츠
                        </Title>
                        <Subscription>
                            45,000원
                        </Subscription>
                    </IMGBox>
                </ItemBox>
                <ItemBox>
                    <IMGBox>
                        <Item />
                        <Title>
                            클래식 B 주르핏 티셔츠
                        </Title>
                        <Subscription>
                            45,000원
                        </Subscription>
                    </IMGBox>
                </ItemBox>
                <ItemBox>
                    <IMGBox>
                        <Item />
                        <Title>
                            클래식 B 주르핏 티셔츠
                        </Title>
                        <Subscription>
                            45,000원
                        </Subscription>
                    </IMGBox>
                </ItemBox>
            </ItemsContainer>
        </GridContainer>
    </MainContainer>    
  )
}

export default ShoppingList