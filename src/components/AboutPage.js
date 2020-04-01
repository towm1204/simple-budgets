import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class AboutPage extends Component {
  render() {
    return(
      <div>
      <header>
        <nav className="navbar navbar-dark">
          <div>
            <Link to="/">
              <button aria-label= "About page button" id="aboutButton" htmlFor="aboutButton"className="navbar-toggler" type="button" data-toggle="" data-target="">
                <span className="fa fa-angle-left"></span>
              </button>
            </Link>
          </div>
          <span>
            <h1>Simple Budget</h1>
          </span>
        </nav>
      </header>
      <main id="about">
      <h1 aria-labelledby= "Description" id ="Description" htmlFor="Description"> Simple Budget </h1>
      <p> Budgeting is a act of creating and following a spending plan for your money. it ensures that
          you will always have enough money  for the things you need and the things that are important
          to you</p>
      <p> Simple Budget is designed to revolve around the topic of personal finance and budgeting.
          Inspiration for this app is the fact that a great deal of people do not have a stable
          income, such as people with a part-time job and people on leave of absence.
          After using several budgeting web apps and phone apps
          out there such as <a className = "app" href="https://www.mint.com/">Mint</a> (Web app),
          <a className = "app" href="https://moneylover.me/">MoneyLover</a>  (IOS app),
          and <a className = "app"  href="https://www.buxfer.com/pricing">Buxfer</a> (Web app).
          we have found a common problem with all of the apps; free version of the apps only
          allow users to customize the app to a certain extent. For Example: </p>
          <ul>
              <li> <em>Mint</em>
                  only allows for a <u> fixed </u> sets of spending categories. </li>
              <li> <em>MoneyLover</em>
                  only allows a <u> Limited </u> amount of accounts. </li>
              <li> <em>Buxer</em>
                  has a variety of extensive features, yet
                  the app is unappealing due to its <u> complicated </u> features. </li>
          </ul>
              <h2 id="WhySB" > Why Simple Budget? </h2>
                  <ol>
                      <li> Our simple Budget  is designed to be easily <u>acceessible</u> </li>
                      <li> Our Simple Budget allows our users to add <u>unlimited</u> number of accounts,
                          types of budget, and expense</li>
                      <li> Ad-Free for <u>now </u> </li>
                  </ol>
                  <h2 id="Developer-Information" > Developer Information</h2>
                  <div className="Picrow">
                      <div className="Piccolumn">
                        <img id="towimage" src="img/tow.jpeg" alt="Tow"></img>
                          <div>Tow Mokaramanee </div>
                          <div>className of 2021</div>
                          <div>Informatics Major</div>
                      </div>
                      <div className="Piccolumn">
                        <img id="isaacimage" src="img/isaac.png" alt="Isaac"></img>
                          <div>Donggyu Isaac Hills </div>
                          <div>className of 2020</div>
                          <div>Informatics Minor </div>
                      </div>
                    </div>
      </main>
      </div>
    );
  }
}
