import React from 'react';
const contentful = require('contentful')

import './press-kit.scss';

class Photos extends React.Component {
  constructor() {
    super();
    this.state = {
      bands: [],
      venues: [],
      festivals: []
    };

    this.client = contentful.createClient({
      space: "7w7g699rgy3a",
      accessToken: "6cf00910a832cfc7aea49aa3f79fdee889cadc6d8dc2955d073f6535e76e07d7"
    });
  }

  componentDidMount() {
    this.client.getEntries({ content_type: "bands", order: "sys.createdAt" })
      .then((response) => {
        const bands = response.items.map((item) => {
          return item.fields;
        })

        this.setBands(bands);
      })
    
    this.client.getEntries({ content_type: "venues", order: "sys.createdAt" })
      .then((response) => {
        const venues = response.items.map((item) => {
          return item.fields;
        })

        this.setVenues(venues);
      })
    
    this.client.getEntries({ content_type: "festivals", order: "sys.createdAt" })
      .then((response) => {
        const festivals = response.items.map((item) => {
          return item.fields;
        })

        this.setFestivals(festivals);
      })
  }

  setBands(bands) {
    this.setState({ bands });
  }

  setVenues(venues) {
    this.setState({ venues });
  }

  setFestivals(festivals) {
    this.setState({ festivals });
  }

  render() {
    const { bands, venues, festivals } = this.state;

    return(
      <div className={'pressKitWrapper'}>
        <div className={'pressKitBody'}>
          <div className={'pressKitHeader'}>
            <h1>BIO</h1>
          </div>
          <p>
            Risen from the ashes of keg-fueled house parties and sweaty bars of College Park, MD, Box Era has
            planted itself as a staple in the up-and-coming DMV music scene. Creating a jam-inspired electro-pop
            and funk blend, Box Era’s music arms you with every tool necessary to go talk to that special
            someone you’ve been eyeing up. You’ll find yourself dancing the night away, shaking hands with
            CEOs, and experiencing the juiciest sweet-and-sour jamwich of your life.
          </p>

          <p>
            With a debut EP behind them, Box Era is gearing up for an explosive rise to power. The band has
            supported national headliners and headlined renowned venues up and down the east coast. The
            party is only going to grow. There’s a saxophone, a talkbox, and two pairs of glasses. There’s
            magic, youth, and the most unique sound you’ve heard since The Bangles. Box Era is the story of
            five boys wandering the halls of Xanadu, forever in search of sweet cream.
          </p>

          <hr></hr>

          <div className={'pressKitHeader'}>
            <h1>BLANK ADMAT</h1>
          </div>

          <div className="imagecontainer">
            <div className="image">
              <img src="./img/box_era_art.jpg" />
              <a download="box_era_art.jpg" href="./img/box_era_art.jpg" title="BoxEraArt">
                <p>Download File</p>
              </a>
            </div>
            <div className="image">
              <img src="./img/logo_blk.png" />
              <a download="logo_blk.png" href="./img/logo_blk.png" title="LogoBlack">
                <p>Download File</p>
              </a>
            </div>
            <div className="image">
              <img src="./img/logo_wht.png" />
              <a download="logo_wht.png" href="./img/logo_wht.png" title="LogoWhite">
                <p>Download File</p>
              </a>
            </div>       
            <div className="image">
              <img src="./img/boxera_graphic.png" />
              <a download="boxera_graphic.png" href="./img/boxera_graphic.png" title="BoxEraGraphic">
                <p>Download File</p>
              </a>
            </div>
            <div className="image">
              <img src="./img/maps_album_cover.jpg" />
              <a download="maps_album_cover.jpg" href="./img/maps_album_cover.jpg" title="MapsAlbumCover">
                <p>Download File</p>
              </a>
            </div>
          </div>

          <div className={'pressKitHeader'}>
            <h1>PRESS PHOTOS</h1>
          </div>

          <div className="imagecontainer">
            <div className="image">
              <img src="./img/venue.jpg" />
              <a download="venue.jpg" href="./img/venue.jpg" title="Venue">
                <p>Download File</p>
              </a>
            </div>
            <div className="image">
              <img src="./img/basement.jpg" />
              <a download="basement.jpg" href="./img/basement.jpg" title="Basement">
                <p>Download File</p>
              </a>
            </div>
            <div className="image">
              <img src="./img/bw_crew.JPG" />
              <a download="bw_crew.JPG" href="./img/bw_crew.JPG" title="BW Crew">
                <p>Download File</p>
              </a>
            </div>
            <div className="image">
              <img src="./img/crew.JPG" />
              <a download="crew.JPG" href="./img/crew.JPG" title="Crew">
                <p>Download File</p>
              </a>
            </div>
            <div className="image">
              <img src="./img/crew2.JPG" />
              <a download="crew2.JPG" href="./img/crew2.JPG" title="Crew2">
                <p>Download File</p>
              </a>
            </div>
            <div className="image">
              <img src="./img/crew3.JPG" />
              <a download="crew3.JPG" href="./img/crew3.JPG" title="Crew3">
                <p>Download File</p>
              </a>
            </div>
            <div className="image">
              <img src="./img/jump.JPG" />
              <a download="jump.JPG" href="./img/jump.JPG" title="Jump">
                <p>Download File</p>
              </a>
            </div>
            <div className="image">
              <img src="./img/jump2.JPG" />
              <a download="jump2.JPG" href="./img/jump2.JPG" title="Jump2">
                <p>Download File</p>
              </a>
            </div>
            <div className="image">
              <img src="./img/jump3.png" />
              <a download="jump3.png" href="./img/jump3.png" title="Jump3">
                <p>Download File</p>
              </a>
            </div>
          </div>

          <div className={'pressKitHeader'}>
            <p>Box Era has played with the following bands:</p>
          </div>
          { bands
            .map((band, index) => (
              <div className="presslistitem" key={ index }>
                <p className="listtitle">{ band.name }</p>
                { band.website ? <a className="listlink" href={ band.website }>
                  <p>website</p>
                </a> : null }
                { band.facebook ?<a className="listlink" href={ band.facebook }>
                  <p>facebook</p>
                </a> : null }
              </div>
            )) }

          <div className={'pressKitHeader'}>
            <p>Box Era has played at the following venues:</p>
          </div>
          { venues
            .map((venue, index) => (
              <div className="presslistitem" key={ index }>
                <p className="listtitle">{venue.name}</p>
                <p className="listtitle" style={ { fontWeight: 100 } }>{venue.location}</p>                
              </div>
            )) }
          
          <div className={'pressKitHeader'}>
            <p>Box Era has performed at the following festivals:</p>
          </div>
          { festivals
            .map((fest, index) => (
              <div className="presslistitem" key={ index }>
                <p className="listtitle">{fest.name}</p>
                <p className="listtitle" style={{ fontWeight: 100 }}>{fest.location}</p>
              </div>
            )) }
          <p className="listtitle" style={{ fontWeight: 100 }}>* multiple appearances</p>
        </div>
      </div>
    );
  }
}

export default Photos;
