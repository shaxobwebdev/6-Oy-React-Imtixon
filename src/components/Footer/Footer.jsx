import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer({
  imgLogo,
  logoAlt,
  mail,
  contact,
  location,
  title,
  copyRight,
}) {
  const listItem = [
    {
      title: "Home",
      navLists: ["Benefits", "Our Courses", "Our Testimonials", "Our FAQ"],
    },
    {
      title: "About",
      navLists: ["Company", "Achievements", "Our Goals"],
    },
  ];

  return (
    <div className="bg-white">
      <div className=" container w-[100%] md:w-[90%] lg:w-[80%] sm:w-[50%] mx-auto gap-24 lg:py-[80px] pt-[40px] pb-[20px] flex flex-col lg:flex-row justify-between">
        <div>
          <img src={imgLogo} alt={logoAlt} className="mb-8  w-[60px]" />
          <div className="flex items-center gap-2 mb-4">
            <FontAwesomeIcon className=" text-[35px]" icon={faEnvelope} />
            <span className="text-[#262626] font-[500] text-[20px]">
              {mail}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <FontAwesomeIcon className="text-[35px]" icon={faPhone} />
            <span className="text-[#262626] font-[500] text-[20px]">
              {contact}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <FontAwesomeIcon className="text-[35px]" icon={faLocationDot} />
            <span className="text-[#262626] font-[500] text-[20px]">
              {location}
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[24px] md:gap-[100px] sm:w-[50%] lg:gap-[70px] mt-5 lg:mt-0">
          <div className="flex gap-[70px] md:gap-[100px] pt-[20px] md:pt-0">
            {listItem.map((item) => {
              return <Navigation key={item.title} navigation={item} />;
            })}
          </div>
          <div>
            <span className="font-[600] text-[17px] text-[#262626]">
              {title}
            </span>
            <div className="flex gap-4 pt-4">
              <FontAwesomeIcon
                icon={faFacebook}
                className="   bg-[#F7F7F8] border border-[#F1F1F3] rounded-[8px] p-[12px] text-[#333333] cursor-pointer text-[30px] transition ease-in-out duration-500 hover:bg-yellow-500"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="bg-[#F7F7F8] border border-[#F1F1F3] rounded-[8px] p-[12px] text-[#333333] cursor-pointer text-[30px] transition ease-in-out duration-500 hover:bg-yellow-500"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="bg-[#F7F7F8] border border-[#F1F1F3] rounded-[8px] p-[12px] text-[#333333] cursor-pointer text-[30px] transition ease-in-out duration-500 hover:bg-yellow-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" container w-[100%] md:w-[90%] lg:w-[80%] sm:w-[50%] flex-wrap mx-auto">
        <hr />
        <div className="flex justify-center">
          <span className="font-[500] text-[15px] text-[#656567] pt-8 pb-4">
            {copyRight}
          </span>
        </div>
      </div>
    </div>
  );
}

function Navigation({ navigation }) {
  const { title, navLists } = navigation;

  return (
    <div>
      <span className="font-[600] text-[17px] text-[#262626]">{title}</span>
      <ul className="pt-4">
        {navLists.map((navList) => {
          return (
            <li
              key={navList}
              className="font-[500] text-[14px] text-[#59595A] mb-3 cursor-pointer  duration-500 hover:translate-x-4"
            >
              {navList}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
