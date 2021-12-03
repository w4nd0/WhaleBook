import styled from "styled-components";
import { ProSidebar, Menu, SidebarHeader } from "react-pro-sidebar";

export const CustomSideBar = styled(ProSidebar)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  height: 100vh;
`;

export const CustomHeader = styled(SidebarHeader)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .imgBox {
    background: var(--background-black);
    padding: 20px 0;
    display: flex;
    justify-content: center;
    width: 55%;
    margin-top: 20px;
    border-radius: 4px;
    img {
      height: 90px;
    }
  }

  .pagBox {
    background: var(--background-black);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px 10px;
    margin: 20px;
    border-radius: 4px;
  }

  p,
  h2 {
    color: var(--white);
  }

  h2 {
    font-size: 22px;
  }
`;

export const CustomMenu = styled(Menu)`
  .pro-item-content {
    color: var(--white);
  }

  .pro-inner-list-item {
    background: rgba(43, 43, 43, 0.35) !important;
  }

  .pro-icon-wrapper {
    border-radius: 4px !important;
  }

  .pro-icon svg {
    fill: white;
  }
`;
