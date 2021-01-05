import { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  OptionsWrapper,
  Option,
  Logo,
  OptionText,
  SettingsTooltip,
  SettingsTooltipWrapper,
} from '../../styled/SidebarStyles';
import logo from '../../../pictures/logo.png';
import { useContext } from 'react';
import UserContext from '../../../context/UserContext';

function Options() {
  const [showSettingsTooltip, setShowSettingsTooltip] = useState(false);
  const { userData, setUserData } = useContext(UserContext);

  function logout() {
    localStorage.setItem('auth-token', '');
    setUserData({
      token: null,
      user: null,
    });
  }

  return (
    <OptionsWrapper>
      <Logo src={logo} alt="logo" />
      <Option href="#">
        <svg viewBox="0 0 24 24">
          <g>
            <path
              fill="#fa0095"
              d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"
            ></path>
          </g>
        </svg>
        <OptionText>Home</OptionText>
      </Option>
      <Option href="#">
        <svg viewBox="0 0 24 24">
          <g>
            <path
              fill="#fa0095"
              d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"
            ></path>
          </g>
        </svg>
        <OptionText>Messages</OptionText>
      </Option>
      <Option onClick={() => setShowSettingsTooltip(prev => !prev)}>
        <svg viewBox="0 0 24 24">
          <g>
            <path
              fill="#fa0095"
              d="M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z"
            ></path>
            <path
              fill="#fa0095"
              d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
            ></path>
          </g>
        </svg>
        <OptionText>Settings</OptionText>
      </Option>
      {showSettingsTooltip &&
        ReactDOM.createPortal(
          <SettingsTooltipWrapper onClick={() => setShowSettingsTooltip(false)}>
            <SettingsTooltip>
              {userData.user ? (
                <div onClick={logout}>Logout</div>
              ) : (
                <div>Login</div>
              )}
              <div>Change Theme</div>
            </SettingsTooltip>
          </SettingsTooltipWrapper>,
          document.querySelector('#settings-tooltip')
        )}
    </OptionsWrapper>
  );
}

export default Options;
