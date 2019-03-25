import React from 'react';
import Adventages from '../../global/Adventages';
import EventDetail from '../EventDetail';
import DetailTabs from '../DetailTabs';
import SocialShare from '../SocialShare';
import Calendar from '../Calendar';
import FeedBack from '../FeedBack';
import DetailInteresting from '../DetailInteresting';

const DetailPageView = ({ title, event, date }) => (
  <div className="container">
    <Adventages />
    <div className="row">
      <div className="col-9">
        <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
        <EventDetail event={event} date={date} />
        <div className="row area-2">
          <div className="col-12">
            <DetailTabs data={event} />
          </div>
        </div>
      </div>
      <div className="col-3 right-side">
        <SocialShare data={event} />
        <Calendar data={event} />
        <FeedBack data={event} />
        <DetailInteresting data={event} />
      </div>
    </div>
  </div>
);

export default DetailPageView;