import css from "./Footer.module.css";
import symbolDefs from "../../../assets/symbol-defs.svg";

const Footer = () => {
  return (
    <footer className={css.footerSection}>
      <h2 className={css.footerText}>
        performed as part of a test case for the company
      </h2>
      <div className={css.logoBG}>
        <img alt="alt text" src="/" width="20" />
      </div>
      <ul className={css.networksList}>
        <li>
          <svg className={css.socialNetworks} width="18" height="18">
            <use href={symbolDefs + "#github-icon"}></use>
          </svg>
        </li>
        <li>
          <svg width="18" height="18">
            <use href={symbolDefs + "#twitter-icon"}></use>
          </svg>
        </li>
        <li>
          <svg width="18" height="18">
            <use href={symbolDefs + "#heart-icon"}></use>
          </svg>
        </li>
      </ul>
      <p>2023</p>
    </footer>
  );
};

export default Footer;
