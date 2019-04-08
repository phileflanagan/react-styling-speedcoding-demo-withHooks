import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  min-width: 250px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: relative;
  background-color: #ccc;
  width: 100%;
  padding-top: ${props => (props.r169 ? "56.25%" : null)};
`;

export const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  background-image: ${props => (props.bg ? `url(${props.bg})` : null)};
`;

export const CardBottom = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.8rem;
`;

export const CardInfo = styled.div``;

export const CardTitle = styled.h1`
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 2px;
`;

export const CardDescription = styled.p``;

export const CardConversion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardPrice = styled.p``;

export const CardCTA = styled.button`
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: transparent;
  padding: 0 1rem;
  height: 24px;
  border-radius: 4px;
  color: #444;

  &:hover {
    color: white;
    background-color: #444;
    border-color: #444;
  }
`;

export const SoldOut = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1;
`;
