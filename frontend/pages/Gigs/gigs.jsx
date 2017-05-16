import React from 'react';
import { ajax } from 'jquery';

class Gigs extends React.Component {
  constructor() {
    super();

    this.state = {
      tourDates: []
    };
  }

  componentWillMount() {
    ajax({
      method: "GET",
      url: `${location.origin}/getTourDates`
    }).then((res) => {
      let tourDates = res.tourDates.sort((a,b) => a.date < b.date ? -1 : 1);
      this.setState({tourDates});
    });
  }

  render() {
    let tourDates = this.state.tourDates.map((gig, idx) => {
      return (
        <div className='tourDate' key={idx}>
          <div>{gig.date.split('-').slice(0,2).join('/')}</div>
          <div>{gig.venue}</div>
          <div>{gig.location}</div>
          <a href={gig.link} className={gig.link ? '' : 'deadLink'}>Link</a>
        </div>
      );
    });

    return(
      <div>
        <h1>UPCOMING GIGS</h1>
        <ul className='toureDates'>
          {tourDates}
        </ul>
      </div>
    );
  }
}

export default Gigs;
