import FooterOne from "../Footer/FooterOne";
import HeaderFour from "../Header/HeaderFour";

export default function LayoutFour(props) {
  return (
    <>
      <HeaderFour />
      {props.children}
      <FooterOne classname={'style-four'} color={'red'} />
    </>
  );
}
