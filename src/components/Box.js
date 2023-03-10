import { memo } from "react"
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

// This component mimic the behavior of a container
const Box = styled.div`
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `};

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `};

  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `};

  ${(props) =>
    props.border &&
    css`
      border: ${props.border};
    `};
`;

Box.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  fontSize: PropTypes.string,
  border: PropTypes.string,
};

export default memo(Box);
