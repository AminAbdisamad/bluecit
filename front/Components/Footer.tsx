import Link from "next/link";
import styled from "styled-components";
import {
  TwitterWithCircle,
  FacebookWithCircle,
  GithubWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social/";
import { FooterStyles } from "./styles/FooterStyles";

import { StyledIconBase } from "@styled-icons/styled-icon";

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: red;
    /* icon styles go here */
  }
`;

const TwitterIcon = styled(TwitterWithCircle)`
  color: ${({ theme }) => theme.text};
  size: "45";
  &:hover {
    filter: brightness(0.5);
  }
`;

const footerYear = new Date();
export default function Footer() {
  return (
    <FooterStyles>
      <div className='footer'>
        <div className='footerAddress'>
          <h2>BlueCIT Logo</h2>
        </div>
        <div className='footerMenu'>
          <ul>
            <h4>About</h4>
            <li>
              <a>Companay</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Contacts</a>
            </li>
          </ul>
        </div>
        <div className='footerMenu'>
          <ul>
            <h4>Products</h4>
            <li>
              <a>Companay</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Contacts</a>
            </li>
          </ul>
        </div>
        <div className='footerMenu'>
          <ul>
            <h4>Insights</h4>
            <li>
              <a>Companay</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Contacts</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='social'>
        <ul>
          <li>
            <a href='https://github.com/bluecit'>
              <GithubWithCircle />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/BlueCIT_'>
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com/Bluecit.io'>
              <FacebookWithCircle />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/bluecit_io'>
              <InstagramWithCircle />
            </a>
          </li>
        </ul>
      </div>
      <div className='copyright'>
        <p>
          © 2018 - {footerYear.getFullYear()} <a>BlueCIT</a>. All Rights
          Reserved.
        </p>
      </div>
    </FooterStyles>
  );
}
