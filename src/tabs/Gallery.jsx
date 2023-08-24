import { Button } from 'components/Button/Button';
import { Form } from 'components/Form';
import { GalleryList } from 'components/Gallery/GalleryList';
import { Component } from 'react';
import { getImages } from 'service/galleryService';

export class Gallery extends Component {
  state = {
    query: '',
    photos: [],
    page: 1,
    isEmpty: false,
    showBtn: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      getImages(query, page).then(({ photos, total_results }) => {
        if (!total_results) {
          this.setState({ isEmpty: true });
          return;
        }
        this.setState(prevState => ({
          photos: [...prevState.photos, ...photos],
          showBtn: page < Math.ceil(total_results / 15)
        }));
      });
    }
  }

  handleSubmit = query => {
    this.setState({ query, photos: [], page: 1, isEmpty: false });
  };

  loadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  render() {
    const { photos, isEmpty,showBtn } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit} nameButton="Search" />
        <GalleryList photos={photos} />
        {showBtn && <Button handleClick={this.loadMore} text='Load more' />}
        {isEmpty && <p>Sorry we nothing find😭</p>}
      </>
    );
  }
}
