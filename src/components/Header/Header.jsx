import useThemeStore from '@stores/themeStore'
import {
  DdayBox,
  HeaderContainer,
  Logo,
  ThemeButton,
  ThemeButtonContainer,
  UserNicknameBox,
  UserProfileBox,
} from './Header.style'

export default function Header({ onThemeChange }) {
  const { setTheme } = useThemeStore()

  const handleThemeChange = (theme) => {
    const selectedTheme = theme
    setTheme(selectedTheme)
    if (onThemeChange) {
      onThemeChange(selectedTheme)
    }
  }

  return (
    <HeaderContainer>
      <Logo src="src/assets/logo/Harch.png" />
      <ThemeButtonContainer>
        <ThemeButton
          color="#C8EBBF"
          onClick={() => handleThemeChange('light-green')}
        />
        <ThemeButton
          color="#FFE8F7"
          onClick={() => handleThemeChange('light-pink')}
        />
      </ThemeButtonContainer>
      <UserProfileBox>
        <DdayBox>D-154</DdayBox>
        <UserNicknameBox>User0309</UserNicknameBox>
      </UserProfileBox>
    </HeaderContainer>
  )
}
