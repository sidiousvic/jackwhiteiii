import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="news">
        <NewsItem
          title="Jack White in Nashville"
          image="https://jackwhiteiii.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-02-at-9.48.43-AM.png"
          text="Jack White has announced a show at Nashville’s Bridgestone Arena on November 20, 2018 as a makeup show for Pilgrimage Music & Cultural Festival’s recent cancellation, ending the BOARDING HOUSE REACH world tour with a special hometown performance. The show will feature support from very special guests Margo Price and Joshua Hedley, rounding out the Third Man Records-centric bill.

          A limited amount of pre-sale tickets will be available to Third Man Vault members starting Wednesday, October 3rd at 10am CT. Tickets go on sale to the public at 10am CT on Friday, October 5th. Tickets will be available at livenation.com, the Bridgestone Arena Box Office or charge by phone at (800) 745-3000."
        />
        <NewsItem
          title="More Tours"
          image="https://jackwhiteiii.com/wp-content/uploads/2018/10/JW_TOURANNOUNCE_V2.gif"
          text="Jack has added two more shows to the final leg of his Boarding House Reach tour. The just-announced November 17th show at Brooklyn’s Kings Theatre and November 19th show at Chicago’s Aragon Ballroom go on sale to the public this Friday, October 12th at 11am local time. A limited amount of pre-sale tickets will be available to Third Man Vault members starting at 10am local time on Thursday, October 11th.

          Tickets for Jack’s Boarding House Reach tour finale at Bridgestone Arena on November 20th are on sale now!"
        />
        <NewsItem
          title="Jack White in Canada"
          image="https://jackwhiteiii.com/wp-content/uploads/2018/08/Unknown-2-1200x1589.jpeg"
          text="Jack will return to Canada with the Boarding House Reach tour this November. Tickets go on sale the public at 10am local time on Friday, August 17th. A limited amount of pre-sale tickets will be available to Third Man Records Vault members starting Tuesday, August 14th at 10am local time. Visit the tour page for the full list of Boarding House Reach tour dates and to purchase tickets."
        />
        <NewsItem
          title="US headline tour dates"
          image="https://jackwhiteiii.com/wp-content/uploads/2018/06/unnamed-13.jpg"
          text="Jack has announced new US headline tour dates on the BOARDING HOUSE REACH world tour for September 2018, bringing Jack and his touring outfit to Shreveport, Tulsa, Lubbock, and El Paso. A limited number of pre-sale tickets will be available to Third Man Records Vault members starting Tuesday, June 19th at 10am local time. Tickets go on sale to the general public at 10am local time on Friday, June 22nd. The new dates, along with all other current tour dates, can be found here."
        />
      </div>
    );
  }
}
