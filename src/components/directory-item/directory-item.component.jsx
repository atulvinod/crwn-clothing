import * as Styled from "./directory-item.styles";

export const DirectoryItem = (props) => {
  const { id, imageUrl, title } = props.category;
  return (
    <Styled.DirectoryItemContainer key={id}>
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
