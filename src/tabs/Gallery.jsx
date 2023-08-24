import { Button } from 'components/Button/Button';
import { Form } from 'components/Form';
import { GalleryList } from 'components/Gallery/GalleryList';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { getImages } from 'service/galleryService';

export class Gallery extends Component {
  state = {
    query: '',
    photos: [],
    page: 1,
    isEmpty: false,
    showBtn: false,
    isError: '',
    src: '',
    alt: '',
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ isLoading: true });
      getImages(query, page)
        .then(({ photos, total_results }) => {
          if (!total_results) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            photos: [...prevState.photos, ...photos],
            showBtn: page < Math.ceil(total_results / 15),
          }));
        })
        .catch(error => {
          this.setState({ isError: error.message });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleSubmit = query => {
    this.setState({ query, photos: [], page: 1, isEmpty: false, isError: '' });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleOpenModal = ({ src, alt }) => {
    this.setState({ src, alt });
  };

  render() {
    const { photos, isEmpty, showBtn, isError, src, alt, isLoading } =
      this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit} nameButton="Search" />
        <GalleryList photos={photos} openModal={this.handleOpenModal} />
        {showBtn && <Button handleClick={this.loadMore} text="Load more" />}
        {isEmpty && <p>Sorry we nothing find😭</p>}
        {isError && <p>{isError}😭</p>}
        {src && <Modal closeModal={this.handleOpenModal} src={src} alt={alt} />}
        {isLoading && <Loader />}
      </>
    );
  }
}
