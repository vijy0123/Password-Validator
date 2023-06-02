// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  CardContainer,
  Heading,
  Description,
  CustomPassword,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  return (
    <AppContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <CustomPassword
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {password.length >= 8 ? (
          ''
        ) : (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </CardContainer>
    </AppContainer>
  )
}
export default PasswordValidator
