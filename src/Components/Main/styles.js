import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
input{
  background-color: #282c34;
  border-color: gray;
  height: 30px;
  width: 300px;
  color: gray;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: x-large;
  margin-top: 3rem;
}
`
export const Title = styled.h1`
color: grey;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 100px;
padding-top: 5rem;
` 
export const Add = styled.button`
  color: gray;
  border-color: gray;
  height: 30px;
  margin-top: 3rem;
  margin-left: 1rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: large;
`
export const Boxing = styled.div`
display: flex; 
align-items: center;
`
export const BoxList = styled.div`
display : flex;
align-items: center;
p{
    color: grey;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: x-large;
    margin-top: 3rem;
}
`
export const Delete = styled.button`
  height: 30px;
  margin-top: 3rem;
  margin-left: 1rem;
  border: none;
  img {
      height: 30px;
  }
`