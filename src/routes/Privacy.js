import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import GA from 'react-google-analytics-lite';
import Footer from './Footer';
import '../styles/Main.scss';


class Privacy extends Component {

	onGALoad() {
		window.ga('create', 'UA-113131904-1', 'auto'); //initialize
		window.ga('send', 'pageview', '/privacy');
  }

  render() {
    return (
      <div className="priv-grid">
      <Helmet>
        <meta charSet="utf-8"/>
        <title>privacy | amagazi</title>
      </Helmet>
      <GA onload={ this.onGALoad } />

        <div className="priv-state1">
        <h1 className="priv-title">privacy policy</h1>
          <p>amagazi respects your privacy.
            We have implemented a privacy policy that outlines the use
            of personally identifiable information on our site.
            Please understand that by using our site you are agreeing with our policy.
          </p>
        </div>

        <div className="priv-state2">
          <p><h3>Individual User Information that You Submit</h3>
          amagazi may store personally identifiable information that you submitted
          to our site. Such information may include your name, address, phone number,
          email, or personal correspondence to our team.

          <h3>Non-Individual User Information Collected by amagazi</h3>

          amagazi may also gather and store user contact information such as internet
          browser type, demographic data, type of device, device OS, peripheral use,
          software use, browsing history on our site, and the domain you visited prior
          to coming to our site. This data may be compiled to track groups of users and
          not specific individuals. We reserve the right to share non-individual user
          information for promotional, advertising, or other related purposes. The
          following link explains how Google Analytics collects and processes data:
          <a href="www.google.com/policies/privacy/partners/">Google Privacy</a>.

          <h3>Use of Individual Information</h3>

          We use your individual user information only to communicate with you about
          our services and products, or those of our clients. We will only share your
          individual user information with subsidiaries of amagazi, strategic partners
          and affiliates, clients in compliance with our privacy policy, or technical
          support entities who maintain our site.
          <br/><br/>
          We may also compile data from other sites with data obtained through or in
          connection with our site. We reserve the right to transfer data to purchasers
          of our site assets or purchasers of our agency or divisions of our agency.
          <br/><br/>
          We reserve, as well, the right to store, access, and disclose any data so
          required by courts or government agencies. We also reserve the right to
          investigate any alleged harassment, fraudulent activities, or any suspected
          violation of criminal law, regulatory guideline, or civil statute.

          <h3>Cookies</h3>

          Technology such as cookies are used to gather non-individual user data
          from you for the purposes of customizing your usage of our site and analyzing
          demographic data. Cookies are data packets that many websites place on your
          hard drive when you browse through them. Information in these cookies is used
          to track the pages you visit. You have the option of configuring your web
          browser to reject cookies and/or notify you that a cookie is being sent to you.
          You can also remove cookies from your browser. Please be advised, however, that
          disabling cookies may limit your ability to navigate our site.

          <h3>Third Party Links</h3>

          We may publish third party links on our site. We are not responsible for the
          privacy policies and/or practices of these sites.

          <h3>Opt-Out Policy</h3>

          Should you no longer wish to receive information, you may opt out from our
          correspondence list. You may also request to remove your information from our
          database of active users. Should you choose to do so, please send an email with
          “Privacy” in the subject line. amagazi is not responsible for removing information
          from third party entities with whom we have shared your information. In the event
          we remove you from our list of active users, we reserve the right to keep data in
          our archives for business reasons.

          <h3>Changing Information</h3>

          You may change your individual user information by contacting us directly.
          amagazi is not responsible for changing information in third party databases.

          <h3>Security</h3>

          We take every possible measure to ensure data security on our site.
          However, due to the nature of the internet, we cannot completely guarantee that
          your information will be free from access by third parties such as hackers.
          Using our site indicates acceptance of this risk.

          <h3>18 and Older</h3>

          It is our policy not to collect personally identifiable information from persons
          under the age of 18, and we request that such persons do not submit any personally
          identifiable information to us through the website. Should you be the parent or guardian
          of a minor who has submitted information to our site, please send an email with “Privacy”
          in the subject line and request his or her information be deleted.
          </p>
        </div>

        <div className="srv-footer pg-footer">
          <Footer />
        </div>

      </div>


    )
  }
}

export default Privacy;
