import React, { PureComponent, Fragment } from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import store from '../../store';
import { request } from '../../api';
import { getValueFromParams, createMarkupText } from '../../helper';
import { categories, cities } from '../../fixtures';
import { detailRecources } from '../../resources';
import { imageUrlRecources } from '../../resources/url';

class DetailInteresting extends PureComponent {
  state = {
    posts: null,
  };

  componentDidMount() {
    const { data } = this.props;

    this.handleUpdateDetailPage(data);
  }

  handleUpdateDetailPage(data) {
    request.getInterestingData(data, true).then((posts) => {
      if (!posts || !posts.length) {
        request.getInterestingData(data, false).then((newPosts) => {
          this.updateDetailInterestingPosts(newPosts, data);
        });

        return;
      }

      this.updateDetailInterestingPosts(posts, data);
    });

    store.dispatch({
      type: 'UPDATE_DETAIL_POST',
      post: data,
    });
  }

  updateDetailInterestingPosts(posts, data) {
    if (!posts) return false;

    this.setState({
      posts: posts.filter(post => post.id !== data.id),
    });

    return true;
  }

  render() {
    const { posts } = this.state;

    if (!posts) return <Fragment />;

    const samePosts = posts.map(samePost => {
      let {
        id: postID,
        categories: postCategories = ['it'],
        title: {
          rendered: postTitle,
        },
        acf: {
          picture = imageUrlRecources.noPhoto,
          price,
          currency = '',
          cities: postCity,
          location,
          dateOf,
        },
      } = samePost;
      let city = getValueFromParams(cities, postCity, 'name', 'url');
      let category = getValueFromParams(categories, postCategories[0], 'id', 'url');

      return <li key={postID} className="same-post-rightside">
        <NavLink onClick={this.handleUpdateDetailPage.bind(this, samePost)} to={`/events/${city}/${category}/${postID}`}>
          <div className="row">
            <div className="col-12">
              <img src={picture || imageUrlRecources.noPhoto} alt="" />
              <div className="samePost-info-rightside row">
                <div className="samePost-title col-7" dangerouslySetInnerHTML={createMarkupText(postTitle)} />
                <div className="text-right col-5">
                  {`${price} ${currency}`}
                </div>
                <div className="col-7">
                  {`${postCity} ${location}`}
                </div>
                <div className="text-right col-5">
                  {dateOf ? moment(dateOf, 'YYYY-MM-DD').format('DD MMM YYYY') : ''}
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </li>
    });

    return (
      <div className="detail-interesting">
        <h4>{detailRecources.maybeInteresting}</h4>
        <ul>
          {samePosts}
        </ul>
      </div>
    );
  }
}

export default DetailInteresting;
