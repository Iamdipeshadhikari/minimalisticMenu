import React, { useState } from "react";
import style from "./Menu.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ClickSound from "../../assets/clickSound.mp3";
import useSound from "use-sound";

// icons
import MainLogo from "../../assets/logo.png";
import SecondOneIcon from "../../assets/2ndmenusIcons/sutraText.png";
import SecondTwoIcon from "../../assets/2ndmenusIcons/sounds.png";
import SecondThirdIcon from "../../assets/2ndmenusIcons/whatSutraHell.png";
import SecondFourthIcon from "../../assets/2ndmenusIcons/sights.png";
import ThirdOneIcon from "../../assets/3rdmenusIcons/Bear Clan.png";
import ThirdTwoIcon from "../../assets/3rdmenusIcons/Bee Clan.png";
import ThirdThreeIcon from "../../assets/3rdmenusIcons/Buddha Tribe.png";
import ThirdFourIcon from "../../assets/3rdmenusIcons/Cat Clan.png";
import ThirdFiveIcon from "../../assets/3rdmenusIcons/Cow Clan.png";
import ThirdSixIcon from "../../assets/3rdmenusIcons/Crow Clan.png";
import ThirdSevenIcon from "../../assets/3rdmenusIcons/Dolphin Clan.png";
import ThirdEightIcon from "../../assets/3rdmenusIcons/Dragonfly Clan.png";
import ThirdNineIcon from "../../assets/3rdmenusIcons/Dream Tribe.png";
import ThirdTenIcon from "../../assets/3rdmenusIcons/Elephant Tribe.png";
import Third11Icon from "../../assets/3rdmenusIcons/Feather Clan.png";
import Third12Icon from "../../assets/3rdmenusIcons/Lion.png";
import Third13Icon from "../../assets/3rdmenusIcons/Lizard Clan.png";
import Third14Icon from "../../assets/3rdmenusIcons/Mantis Tribe.png";
import Third15Icon from "../../assets/3rdmenusIcons/Money Clan.png";
import Third16Icon from "../../assets/3rdmenusIcons/Octopus Clan.png";
import Third17Icon from "../../assets/3rdmenusIcons/Owl Clan.png";
import Third18Icon from "../../assets/3rdmenusIcons/Rabbit Clan.png";
import Third19Icon from "../../assets/3rdmenusIcons/Serpent Clan.png";
import Third20Icon from "../../assets/3rdmenusIcons/Thunderbird Clan.png";
import Third21Icon from "../../assets/3rdmenusIcons/Tiger Tribe.png";
import Third22Icon from "../../assets/3rdmenusIcons/Tree Clan.png";
import Third23Icon from "../../assets/3rdmenusIcons/Turtle Clan.png";
import Third24Icon from "../../assets/3rdmenusIcons/Wolf Pack.png";

const Menu = () => {
  // null, menuFirst, menuSecond
  const [menuToggle1, setMenuToggle1] = useState(false);
  const [menuToggle2, setMenuToggle2] = useState(false);
  const [play] = useSound(ClickSound, { volume: 1 });

  const toggleMenu = () => {
    setMenuToggle1(true);
    play();

    if (menuToggle1) {
      setMenuToggle2(true);
    }

    if (menuToggle1 && menuToggle2) {
      setMenuToggle1(false);
      setMenuToggle2(false);
    }
  };

  return (
    <div className={style.MenuContainer}>
      <div className={style.Logo}>
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          onClick={toggleMenu}
          src={MainLogo}
          alt="Logo"
        />
      </div>

      <div
        className={`${style.MenuFirstRow} ${
          menuToggle1 ? style.MenuFirstRow__Active : null
        }`}
      >
        <Link>
          <img src={SecondOneIcon} alt="Logo Name" />
        </Link>

        <Link>
          <img src={SecondTwoIcon} alt="Logo Name" />
        </Link>

        <Link>
          <img src={SecondThirdIcon} alt="Logo Name" />
        </Link>

        <Link>
          <img src={SecondFourthIcon} alt="Logo Name" />
        </Link>
      </div>
      <div
        className={`${style.MenuSecondRow} ${
          menuToggle2 ? style.MenuSecondRow__Active : null
        }`}
      >
        <Link>
          <img src={ThirdOneIcon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={ThirdTwoIcon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={ThirdThreeIcon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={ThirdFourIcon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={ThirdFiveIcon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={ThirdSixIcon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={ThirdSevenIcon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={ThirdEightIcon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={ThirdNineIcon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={ThirdTenIcon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={Third11Icon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={Third12Icon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={Third13Icon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={Third14Icon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={Third15Icon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={Third16Icon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={Third17Icon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={Third18Icon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={Third19Icon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={Third20Icon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={Third21Icon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={Third22Icon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={Third23Icon} alt="Logo Name" />
        </Link>
        <Link>
          <img src={Third24Icon} alt="Logo Name" />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
