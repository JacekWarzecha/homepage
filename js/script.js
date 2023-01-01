{
  const welcome = () => {
    console.log("hi");
  };

  welcome();

  {
    const deleteMoney = () => {
      const articleOfMoney = document.querySelector(
        ".js-sectionLoveMoney-money"
      );
      articleOfMoney.remove();
    };

    const initDeleteMoney = () => {
      const buttonLove = document.querySelector(".js-button-love");
      buttonLove.addEventListener("click", deleteMoney);
    };

    const deleteLove = () => {
      const articleOfLove = document.querySelector(".js-sectionLoveMoney-love");
      articleOfLove.remove();
    };

    const initDeleteLove = () => {
      const buttonMoney = document.querySelector(".js-button-money");
      buttonMoney.addEventListener("click", deleteLove);
    };

    initDeleteMoney();
    initDeleteLove();
  }

  {
    const changeTheme = () => {
      const navigationUnList = document.querySelector(".js-navigation-list");
      const themeName = document.querySelector(".js-themeName");
      const body = document.querySelector(".body");
      const containerList = document.querySelector(".js-container-list");

      body.classList.toggle("js-header__dark");
      navigationUnList.classList.toggle("js-navigation__outline");
      containerList.classList.toggle("js-containerList__backgroundcolor");

      themeName.innerText = body.classList.contains("js-header__dark")
        ? "jasny"
        : "ciemny";
    };

    const initChangeTheme = () => {
      const buttonTheme = document.querySelector(".js-header__button");
      buttonTheme.addEventListener("click", changeTheme);
    };

    initChangeTheme();
  }

  {
    const buttonImg = document.querySelector(".js-sectionLoveMoney-button");
    const photoDelete = () => {
      const imageHeart = document.querySelector(".js-sectionLoveMoney__photo");
      const sectionLoveMoneyPhoto = document.querySelector(
        ".js-sectionLoveMoney-photo"
      );
      imageHeart.remove();
      if (
        sectionLoveMoneyPhoto.classList.contains("js-sectionLoveMoney-button")
      ) {
        buttonImg.classList.add("js-sectionLoveMoney-text-decoration");
      } else {
        buttonImg.remove();
      }
    };

    const initPhotoDelete = () => {
      buttonImg.addEventListener("click", photoDelete);
    };

    initPhotoDelete();
  }

  {
    const switchIncome = () => {
      const containerCryptoVariable = document.querySelector(
        ".js-containerCrypto-variable"
      ).innerText;

      const containerCryptoHowMuch = document.querySelector(
        ".js-containerCrypto-howMuch"
      );
      switch (containerCryptoVariable) {
        case "-25":
          containerCryptoHowMuch.innerText = "+275";
          break;
        case "-50":
          containerCryptoHowMuch.innerText = "+250";
          break;
        case "+100":
          containerCryptoHowMuch.innerText = "400";
          break;
        default:
          containerCryptoHowMuch.innerText = "300";
      }
    };
    switchIncome();
  }
}
