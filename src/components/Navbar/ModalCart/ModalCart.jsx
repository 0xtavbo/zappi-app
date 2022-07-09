import React from 'react'
import { TotalStyled, CloseButtonStyled, ContainerStyled, EnvioStyled, PriceContainerStyled, PriceStyled, ProductContainerStyled, SubtotalStyled, TitleStyled, ButtonContainerStyled } from './ModalCartStyles';
import Increase from "../../UI/Increase/Increase";
import Count from "../../UI/Count/Count";
import Submit from '../../UI/Submit/Submit';

const ModalCart = ({closeModal}) => {
  return (
    <ContainerStyled
      initial={{translateX: 600}}
      animate={{translateX: 0}}
      exit={{translateX: 600}}
      transition={{duration: 0.5}}
      key='cart-modal'
    >
      <CloseButtonStyled
        whileTap={{scale: 0.95}}
        onClick={() => closeModal(false)}
      >
        X
      </CloseButtonStyled>
      <TitleStyled>
        <h1>Products</h1>
      </TitleStyled>
      <div>
        <ProductContainerStyled>
          <img
            src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/Bennazianna_t40kz2.png'
            alt=''
          />
          <div>
            <p>Nombre</p>
            <p>Descripción</p>
            <PriceStyled>$4000</PriceStyled>
          </div>
          <div>
            <Increase>-</Increase>
            <Count>Qty</Count>
            <Increase>+</Increase>
          </div>
        </ProductContainerStyled>
        <PriceContainerStyled>
          <SubtotalStyled>
            <p>Subtotal</p>
            <span>$5000</span>
          </SubtotalStyled>
          <EnvioStyled>
              <p>Envío</p>
              <span>$500</span>
          </EnvioStyled>
          <hr/>
          <TotalStyled>
            <p>Total</p>
            <PriceStyled>$6500</PriceStyled>
          </TotalStyled>
          <ButtonContainerStyled>
            <Submit value='Ir a pagar'/>
          </ButtonContainerStyled>
        </PriceContainerStyled>
      </div>
    </ContainerStyled>
  )
}

export default ModalCart;