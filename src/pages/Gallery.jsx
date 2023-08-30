import { Button } from 'components/Button/Button';
import { Form } from 'components/Form';
import { GalleryList } from 'components/Gallery/GalleryList';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import { getImages } from 'service/galleryService';

export const Gallery = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [isError, setIsError] = useState('');
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    getImages(query, page)
      .then(({ photos, total_results }) => {
        if (!total_results) {
          setIsEmpty(true);
          return;
        }
        setPhotos(prevState => [...prevState, ...photos]);
        setShowBtn(page < Math.ceil(total_results / 15));
      })
      .catch(error => {
        setIsError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, query]);

  const handleSubmit = query => {
    setQuery(query);
    setPhotos([]);
    setPage(1);
    setIsEmpty(false);
    setIsError('');
    setShowBtn(false);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const handleOpenModal = ({ src, alt }) => {
    setSrc(src);
    setAlt(alt);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} nameButton="Search" />
      <GalleryList photos={photos} openModal={handleOpenModal} />
      {showBtn && <Button handleClick={loadMore} text="Load more" />}
      {isEmpty && <p>Sorry we nothing find😭</p>}
      {isError && <p>{isError}😭</p>}
      {src && <Modal closeModal={handleOpenModal} src={src} alt={alt} />}
      {isLoading && <Loader />}
    </>
  );
};
