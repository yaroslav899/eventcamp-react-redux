import React from 'react';
import Adventages from '../../global/Adventages';
import Title from '../Title';
import Filters from '../../event-filters';
import LastPosts from '../../global/LastPosts';
import Pagination from '../PaginationContainter';

const ListPageView = ({ eventsElement }) => (
  <div className="container events">
    <Adventages />
    <div className="row">
      <div className="col-12 col-md-9 events_wrapper">
        <Title />
        <ul>
          {eventsElement}
        </ul>
      </div>
      <div className="col-12 col-md-3 events_filter-wrapper">
        <Filters />
        <div className="d-md-none">
          <LastPosts />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Pagination />
      </div>
    </div>
  </div>
);

export default ListPageView;
