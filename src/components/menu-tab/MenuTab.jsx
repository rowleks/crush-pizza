
import PropTypes from "prop-types";
import "./menutab.scss";

// Define prop types
MenuTab.propTypes = {
  selectedSnack: PropTypes.string,
  setSelectedSnack: PropTypes.func.isRequired,
};

function MenuTab({ selectedSnack, setSelectedSnack }) {
  const handleSnackClick = (snack) => {
    setSelectedSnack(snack);
  };

  return (
    <div className="menu-tab">
      <div
        className={`snack ${selectedSnack === 'burger' ? 'selected' : ''}`}
        onClick={() => handleSnackClick('burger')}
      >
        <img src="/burger.png" alt="Burger" />
        <span>Burger</span>
      </div>
      <div
        className={`snack ${selectedSnack === 'pizza' ? 'selected' : ''}`}
        onClick={() => handleSnackClick('pizza')}
      >
        <img src="/pizza.png" alt="Pizza" />
        <span>Pizza</span>
      </div>
      <div
        className={`snack ${selectedSnack === 'shawarma' ? 'selected' : ''}`}
        onClick={() => handleSnackClick('shawarma')}
      >
        <img src="/hotdog.png" alt="Shawarma" />
        <span>Shawarma</span>
      </div>
    </div>
  );
}



export default MenuTab;
