import "./index.css";

const ThumbnailItem = (props) => {
  const { thumbnailItem, isActive, setActiveThumbnailId } = props;
  const { thumbnailUrl, thumbnailAltText, id } = thumbnailItem;
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`;

  const onClickThumbnail = () => {
    setActiveThumbnailId(id);
  };

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  );
};

export default ThumbnailItem;
