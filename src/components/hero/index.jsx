import React from 'react'
import img2 from '../../assets/images/image2.jpg'
import test1 from '../../assets/images/test1.jpg'
import test2 from '../../assets/images/test2.png'
import './index.scss'

function Hero() {
  return (
    <div className='main'>
      <div class="cover">
        <div class="book">
          <label for="page-1" class="book__page book__page--1">
            {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/193203/1111.jpg" alt=""> */}
            <img src={img2} />
          </label>

          <label for="page-2" class="book__page book__page--4">
            {/* <div class="page__content">
        <h1 class="page__content-title">I</h1>
        <div class="page__content-blockquote">
          <p class="page__content-blockquote-text">HARI SELDON — . . . born in the 11,988th year of the Galactic Era; died 12,069. The dates are more commonly given in terms of the current Foundational Era as -79 to the year 1 F.E. Born to middle-class parents on Helicon, Arcturus sector (where his father, in a legend of doubtful authenticity, was a tobacco grower in the hydroponic plants of the planet), he early showed amazing ability in mathematics. Anecdotes concerning his ability are innumerable, and some are contradictory. At the age of two, he is said to have. . . </p>
          <p class="page__content-blockquote-text">. . . Undoubtedly his greatest contributions were in the field of psychohistory. Seldon found the field little more than a set of vague axioms; he left it a profound statistical science. . . . </p>
          <p class="page__content-blockquote-text">. . . The best existing authority we have for the details of his life is the biography written by Gaal Dornick who, as a young man, met Seldon two years before the great mathematician's death. The story of the meeting . . .</p>
          <span class="page__content-blockquote-reference">Encyclopedia Galactica*</span>
        </div>
        <div class="page__content-text">
          <p>His name was Gaal Dornick and he was just a country boy who had never seen Trantor before. That is, not in real life. He had seen it many times on the hyper-video, and occasionally in tremendous three-dimensional newscasts covering an Imperial Coronation or the opening of a Galactic Council. Even though he had lived all his life on the world of Synnax, which circled a star at the edges of the Blue Drift, he was not cut off from civilization, you see. At that time, no place in the Galaxy was. </p>

          <p>There were nearly twenty-five million inhabited planets in the Galaxy then, and not one but owed allegiance to the Empire whose seat was on Trantor. It was the last half-century in which that could be said. </p>
          <p>To Gaal, this trip was the undoubted climax of his young, scholarly life. He had been in space before so that the trip, as a voyage and nothing more, meant little to him. To be sure, he had traveled previously only as far as Synnax's only satellite in order to get the data on the mechanics of meteor driftage which he needed for his dissertation, but space-travel was all one whether one travelled half a million miles, or as many light years. </p>
        </div>
        <div class="page__number">3</div>
      </div> */}
            <img src={test2} />

          </label>

          <input type="radio" name="page" id="page-1" />

          <input type="radio" name="page" id="page-2" />
          <label class="book__page book__page--2">
            <div class="book__page-front">
              <div class="page__content">
                <h1 class="page__content-book-title">Foundation</h1>
                <h2 class="page__content-author">Isaac Asimov</h2>

                <p class="page__content-credits">
                  Introduction by
                  <span>Paul Krugman</span>
                </p>

                <p class="page__content-credits">
                  Illustrations by
                  <span>Alex Wells</span>
                </p>

                <div class="page__content-copyright">
                  <p>The Folio Society</p>
                  <p>London - MMXII</p>
                </div>
              </div>
            </div>
            <div class="book__page-back">
              <div class="page__content">
                {/* <h1 class="page__content-title">Contents</h1>
          <table class="page__content-table">
            <tr>
              <td align="left">Part I</td><td align="left">The Psycohistorians</td><td align="right">3</td>
            </tr>
            <tr>
              <td align="left">Part II</td><td align="left">The Encyclopedists</td><td align="right">43</td>
            </tr>
            <tr>
              <td align="left">Part III</td><td align="left">The Mayors</td><td align="right">87</td>
            </tr>
            <tr>
              <td align="left">Part IV</td><td align="left">The Traders</td><td align="right">147</td>
            </tr>
            <tr>
              <td align="left">Part V</td><td align="left">The Merchant Princes</td><td align="right">173</td>
            </tr>
          </table> */}
                <img src={test1} />
                <div class="page__number">2</div>
              </div>
            </div>
          </label>
        </div>
      </div>
      {/* <div className='hero'>
        <div className="icon">
          <img src={img2} />
        </div>
        <div className='invitationText'>
          <p className='geeding'>You are cordially invited to the wedding of</p>
          <div className="name">
            <p className="name">Thet Paing Soe</p>
            <p className="name">&</p>
            <p className="name">Win Lai Yee Mon</p>
          </div>
          <div className="date">
            <p className="date1">May</p>
            <div className='flexDate'>
              <p className="date2">Mon</p>
              <p className="date3">1</p>
              <p className="date4">AT <span className='num'>09</span> AM</p>
            </div>
            <p className="date5 num">2025</p>
          </div>
          <p className='place'>Nan Htike Thu Hotel, Magway.</p>
        </div>
      </div> */}
    </div>
  )
}

export default Hero