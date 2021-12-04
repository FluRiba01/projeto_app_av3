import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #009933;
  flex:1;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const Button = styled.TouchableOpacity`
  height: 60px;
  background-color: #ff1a1a;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`

export const Message = styled.Text`
  color: #fff;
  font-size: 12px;
  padding: 6px;
`