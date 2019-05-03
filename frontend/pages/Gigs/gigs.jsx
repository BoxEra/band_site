import React from "react";
import { ajax } from "jquery";

import classnames from "classnames";

import "./gigs.scss";

class Gigs extends React.Component {
  constructor() {
    super();

    this.state = {
      tourDates: []
    };

    this.isInPast = this.isInPast.bind(this);
  }

  componentWillMount() {
    ajax({
      method: "GET",
      url: `${location.origin}/getTourDates`
    }).then(res => {
      let tourDates = res.tourDates.sort((a, b) =>
        new Date(a.date) < new Date(b.date) ? -1 : 1
      );
      this.setState({ tourDates });
    });
  }

  isInPast(today, date) {
    return new Date(date) < new Date(today);
  }

  render() {
    let today = new Date();
    let month =
      today.getMonth() < 9
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1;
    let day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();

    today = `${month}-${day}-${today.getFullYear()}`;

    let tourDates = this.state.tourDates.map((gig, idx) => {
      let date = gig.date.split("-");
      let year = date[2];

      if (year.length === 4) {
        year = year.substring(2, year.length);
      }

      date = `${parseInt(date[0])}/${parseInt(date[1])}/${parseInt(year)}`;
      if (!this.isInPast(today, gig.date)) {
        return (
          <div className={classnames("tourDate")} key={idx}>
            <div
              className={classnames(
                "tourDateStrikeThrough",
                this.isInPast(today, gig.date) && "tourDateHasPast"
              )}
            />
            <div className={"tourDay"}>{date}</div>
            <div className={"tourVenue"}>{gig.venue.toUpperCase()}</div>
            <div className={"tourLocation"}>{gig.location.toUpperCase()}</div>
            <a
              href={gig.link}
              className={classnames("tourLink", !gig.link && "deadLink")}
            >
              LINK
            </a>
          </div>
        );
      }
    });

    let oldTourDates = this.state.tourDates.map((gig, idx) => {
      let date = gig.date.split("-");
      let year = date[2];

      if (year.length === 4) {
        year = year.substring(2, year.length);
      }

      date = `${parseInt(date[0])}/${parseInt(date[1])}/${parseInt(year)}`;
      if (this.isInPast(today, gig.date)) {
        return (
          <div className={classnames("tourDate")} key={idx}>
            <div
              className={classnames(
                "tourDateStrikeThrough",
                this.isInPast(today, gig.date) && "tourDateHasPast"
              )}
            />
            <div className={"tourDay"}>{date}</div>
            <div className={"tourVenue"}>{gig.venue.toUpperCase()}</div>
            <div className={"tourLocation"}>{gig.location.toUpperCase()}</div>
            <a
              href={gig.link}
              className={classnames("tourLink", !gig.link && "deadLink")}
            >
              LINK
            </a>
          </div>
        );
      }
    });

    return (
      <div className={"gigsWrapper"}>
        <h1 className={"gigsHeader"}>UPCOMING GIGS</h1>
        <ul className="tourDates">
          <img
            className={"satellite"}
            src={"https://s3.amazonaws.com/boxera/space_imgs/satellite.png"}
          />
          {tourDates}
        </ul>

        <h1 className={"gigsHeader"}>PAST GIGS</h1>
        <ul className="tourDates">{oldTourDates.reverse()}</ul>
      </div>
    );
  }
}

export default Gigs;
