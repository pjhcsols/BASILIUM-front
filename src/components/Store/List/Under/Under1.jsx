import React from 'react'
import { 
  IMGBox, 
  Item, 
  ItemBox, 
  ItemsContainer, 
  Subscription, 
  Title 
} from '../../../styles/ShoppingList/Upper/Under.style'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'


function Under1(props) {
  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
        <ItemsContainer>
            <NavLink to='/purchase'>
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
            </NavLink>
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
    </motion.div>
  )
}

export default Under1