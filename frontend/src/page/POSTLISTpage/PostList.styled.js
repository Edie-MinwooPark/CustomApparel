import styled from "styled-components";
import { Container as BSContainer } from "react-bootstrap";

export const Container = styled(BSContainer)`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding: 0 20px;
  & .my-masonry-grid {
    display: flex;
    margin-left: -30px; /* some gutter */
    width: auto;
  }

  & .my-masonry-grid_column {
    padding-left: 30px; /* some gutter */
    background-clip: padding-box;
  }

  & .my-masonry-grid_column > div {
    margin-bottom: 30px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
`;
