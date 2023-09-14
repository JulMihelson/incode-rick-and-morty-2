import css from "./Footer.module.css";
import {
  GithubOutlined,
  HeartFilled,
  TwitterOutlined,
} from "@ant-design/icons";

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
          <GithubOutlined style={{ fontSize: "20px" }} />
          {/* <svg className={css.socialNetworks} width="18" height="18">
            <use href={sprite + "#github-icon"}></use>
          </svg> */}
        </li>
        <li>
          <TwitterOutlined style={{ fontSize: "20px" }} />
          {/* <svg width="18" height="18">
            <use href={sprite + "#twitter-icon"}></use>
          </svg> */}
        </li>
        <li>
          <HeartFilled style={{ fontSize: "20px" }} />
          {/* <svg width="18" height="18">
            <use href={sprite + "#heart-icon"}></use>
          </svg> */}
        </li>
      </ul>
      <p>2023</p>
    </footer>
  );
};

export default Footer;
