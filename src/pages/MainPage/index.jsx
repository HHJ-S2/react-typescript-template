import styled from 'styled-components';

export default function MainPage () {
  return (
    <>
      <Styled.Container>MainPage</Styled.Container>
    </>
  )
}

const Styled = {
  Container : styled.div`
    width: 1170px;
    margin: 0 auto;
    padding: 0 1rem;
  `
}