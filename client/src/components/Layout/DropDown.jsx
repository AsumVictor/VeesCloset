import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

const DropDown = ({ categoriesData, setDropDown, extendclass }) => {
  const navigate = useNavigate();
  const submitHandle = (cat) => {
    navigate(`/products?category=${cat.title}`);
    setDropDown(false);
    window.scrollTo(0, 0);
  };
  return (
    <div
      className={`pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-lg px-2 ${extendclass}`}
    >
      {categoriesData &&
        categoriesData.map((cat, index) => (
          <div
            key={index}
            className={`${styles.noramlFlex} hover:bg-wine_secondary hover:text-white mt-1 rounded-md cursor-pointer`}
            onClick={() => submitHandle(cat)}
          >
            <img
              src={cat.image_Url}
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
              alt=""
            />
            <h3 className="m-3 cursor-pointer select-none">{cat.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;
