import "./header.css";
import varal from '../../images/Group 114.png';
import searchb from '../../images/search.png';
import Ellipse_16 from '../../images/Ellipse 16.png';
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="varal">
          <img src={varal} alt="" />
        </div>
        <div className="home">
          <p>Home</p>
          <p>Service</p>
          <p>Pricing</p>
          <p>About Us</p>
          <button>Start a Company</button>
        </div>
      </div>
      {/* searchBox */}
      <div className="header1">
        <div className="leftdot">
            <img src={Ellipse_16} alt=""/>
        </div>
        <div className="search">
            <div className="searchbox">
                <img src={searchb} alt="" />
                <p>Search a Team | Topic</p>
            </div>
        </div>
      </div>
    </>
  );
};

export { Header };
