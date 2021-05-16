import React from 'react';
import styled from 'styled-components';
import { MdClose} from 'react-icons/md';



const Background = styled.div`
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
postion: fixed;
display: flex;
justify-content: center;
align-itmes: center;
`;
const PurdueWrapper = styled.div`
width: 800px;
height: 500px;
box-shawdow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #000;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
z-index 10;
border-radius: 10px;
`;
const PurdueImg = styled.img`
width: 100%;
height: 100%;
border-radius: 10px 0 0 10px;
background: #000;
`;

const PurdueContent = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
line-height: 1.8;
color: #141414
`;


const ClosePurdueButton = styled(MdClose)`
cursor: pointer;
position: absolute;
top: 20px;
right: 20px;
width: 32px;
height: 32px;
padding: 0;
z-index: 10;
`;

export const Modal = ({showModal, setShowModal}) => {
    return(
        <>
            {showModal ? (
                <Background>
                    <PurdueWrapper showModal={showModal}>
                        <PurdueImg  />
                        <PurdueContent>
                            <h1>Here it is!</h1>
                            <p>This is where my paragraph will be</p>
                            <button>Purdue Uni</button>
                        </PurdueContent>
                        <ClosePurdueButton aria-label='close Purdue' onClick={() => setShowModal (prev => !prev)} />
                    </PurdueWrapper>
                </Background>
            ) : null}
        </>
    )
}


// src={recquire('../img/menubar.jpg')}