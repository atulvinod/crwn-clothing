import { useNavigate } from "react-router-dom";
import * as Styled from "./directory-item.styles";

export const DirectoryItem = (props) => {
  const { id, imageUrl, title, route } = props.category;
  const navigate = useNavigate();
  return (
    <Styled.DirectoryItemContainer key={id} onClick={() => navigate(route)}>
      <Styled.BackgroundImage
        className="background-image"
        imageUrl = {imageUrl}
      />
      <Styled.Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Styled.Body>
    </Styled.DirectoryItemContainer>
  );
};
