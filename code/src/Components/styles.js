import styled from 'styled-components'

export const AppWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
`

export const FormWrapper = styled.form`
background: #F2F0F0;
border: 1px solid black;
width: 560px;
box-shadow: 7px 7px 0px 0px rgba(0,0,0,1);
padding: 0 1rem 1rem;
margin-bottom: 2rem;
@media (max-width: 600px) {
width: 100%;
}
`
export const FormButton = styled.div`
width: 50%;
border-radius: 2rem;
background: #FFADAD;
padding: 1rem;
display: flex;
justify-content: space-around;
align-items: center;
cursor: pointer;  
`
export const ThoughtWrapper = styled(FormWrapper)`
background: white;
`
export const FlexWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const HeartButton = styled.div`
background: ${({ hearts }) => hearts > 0 ? "#FFADAD" : "#F2F0F0"};
border-radius: 50%;
width: 2rem;
padding: 1rem;
display: flex;
justify-content: center;
margin-right: 1rem;
`


