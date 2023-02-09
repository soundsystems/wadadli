import { SocialIcon } from "react-social-icons";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="snap-end">
      <SocialIcon
        className="transition delay-75 hover:scale-125"
        url="https://www.facebook.com/WadadliJerkpage/"
        fgColor="white"
        bgColor="transparent"
      />
      <SocialIcon
        className="transition delay-75 hover:scale-125"
        url="https://www.instagram.com/wadadlijerk/?hl=en"
        fgColor="white"
        bgColor="transparent"
      />
      <SocialIcon
        className="transition delay-75 hover:scale-125"
        url="https://www.yelp.com/biz/wadadli-jerk-brooklyn-3"
        fgColor="white"
        bgColor="transparent"
      />
    </footer>
  );
}

export default Footer;
