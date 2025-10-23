import Link from "next/link";
import * as Icon from '@phosphor-icons/react/dist/ssr'
import classNames from "classnames";

export default function TopNavOne({className}) {
  return (
    <div className={`top_nav h-11 bg-dark text-white ${classNames(className)}`}>
      <div className={`${className !== 'style-four' ? 'container' : 'lg:px-10 px-4'} h-full`}>
        <div className="top_nav_inner flex items-center justify-between h-full">
          <ul className="top_nav_info flex items-center gap-6">
            <li className="info_item inline-flex items-center gap-2 max-md:hidden">
              <Icon.MapPin />
              <span className="caption1">4023 Dominion Cove, Austin Texas 78759</span>
            </li>
            <li className="info_item inline-flex items-center gap-2 max-xs:hidden">
              <Icon.Alarm />
              <span className="caption1">8:00am : 10:00pm Mon-Sun</span>
            </li>
            <li className={`${className !== 'style-four' ? 'hidden' : ''}`}>
              <div className="form_select">
                <select className="pr-9 caption1 uppercase" name="selectLanguage" id="selectLanguage">
                  <option className="text-black" value="en">en</option>
                  <option className="text-black" value="fr">fr</option>
                  <option className="text-black" value="de">de</option>
                </select>
                <Icon.CaretDown className="arrow_down text-xs text-white" />
              </div>
            </li>
          </ul>
          <ul className="top_nav_social flex items-center">
            <li className="social_item">
              <Link href="https://www.facebook.com/"
                className="social_link flex items-center justify-center w-9 h-9" target="_blank">
                <Icon.FacebookLogo className="text-xl" />
                <span className="blind">link facebook</span>
              </Link>
            </li>
            <li className="social_item">
              <Link href="https://www.x.com/" className="social_link flex items-center justify-center w-9 h-9"
                target="_blank">
                <Icon.XLogo className="text-xl" />
                <span className="blind">link x</span>
              </Link>
            </li>
            <li className="social_item">
              <Link href="https://www.instagram.com/"
                className="social_link flex items-center justify-center w-9 h-9" target="_blank">
                <Icon.InstagramLogo className="text-xl" />
                <span className="blind">link instagram</span>
              </Link>
            </li>
            <li className="social_item">
              <Link href="https://www.skype.com/"
                className="social_link flex items-center justify-center w-9 h-9" target="_blank">
                <Icon.SkypeLogo className="text-xl" />
                <span className="blind">link skype</span>
              </Link>
            </li>
            <li className="social_item">
              <Link href="https://www.telegram.com/"
                className="social_link flex items-center justify-center w-9 h-9" target="_blank">
                <Icon.TelegramLogo className="text-xl" />
                <span className="blind">link telegram</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
