export const GalleryList = ({ photos }) => {
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {photos.map(({ id, src, alt }) => (
        <li key={id}>
          <img width='250px' src={src.large} alt={alt} />
        </li>
      ))}
    </ul>
  );
};
