import { OptionWrapper, OptionLink } from '../../styled/SidebarStyles';

function Option({ text, img, href }) {
  return (
    <OptionWrapper>
      <OptionLink to={href}>
        <img src={img} alt={text} width="40px" height="40px" />
        {text}
      </OptionLink>
    </OptionWrapper>
  );
}

export default Option;
