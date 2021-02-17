import { OptionWrapper, OptionLink } from '../../styled/SidebarStyles';

function Option({ text, img, href }) {
  return (
    <OptionWrapper>
      <OptionLink to={href}>
        <img src={img} alt={text} width="30px" height="30px" />
        <span>{text}</span>
      </OptionLink>
    </OptionWrapper>
  );
}

export default Option;
