export const GalleryList = ({ photos, openModal }) => {
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {photos.map(({ id, src, alt }) => (
        <li key={id}>
          <img
            onClick={() => {
              openModal({ src: src.large, alt });
            }}
            width="250px"
            src={src.large}
            alt={alt}
          />
        </li>
      ))}
    </ul>
  );
};
