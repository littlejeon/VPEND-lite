import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MDBInput, MDBBtn, MDBNavLink, MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon,
  MDBContainer, MDBTable, MDBTableHead, MDBTableBody, MDBListGroup, MDBListGroupItem, MDBCollapseHeader, MDBCollapse } from 'mdbreact';
import script from './assets/script.jpg'
import connect from './assets/connect.jpg'
import finderBashProfile from './assets/finderBashProfile.jpg'
import createBashProfile from './assets/createBashProfile.jpg'
import openInAtom from './assets/openInAtom.jpg'
import copyPasteScript from './assets/copyPasteScript.jpg'
import getCode from './assets/getCode.jpg'
import pasteCode from './assets/pasteCode.jpg'
import outputGridResponse from './assets/outputGridResponse.jpg'
import connected from './assets/connected.jpg'

class App extends Component {

  state={
    collapseID: ""
  }

  toggleCollapse = (collapseID, e) => {
    e.preventDefault();
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }

  render() {
    const { collapseID } = this.state;
return (
          <MDBContainer className="md-accordion mt-0 mt-md-2 p-0 pt-5" id="alexa-instructions">
            <div className="instructions-set">
              <h1>Set Up Your VPN Script</h1>
              <MDBCard className="mt-3">
                <MDBCollapseHeader onClick={(e) => this.toggleCollapse("PortalRegistration1", e)}>
                  <span className="alexa-instruction-number">1.</span> Open your '.bash_profile'.
                  <i className={ collapseID==="PortalRegistration1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
                </MDBCollapseHeader>
                <MDBCollapse id="PortalRegistration1" isOpen={collapseID}>
                  <MDBCardBody>
                    <img className="rounded mx-auto d-block" src={openInAtom}/>
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
              <MDBCard>
                <MDBCollapseHeader onClick={(e) => this.toggleCollapse("PortalRegistration2", e)}>
                  <span className="alexa-instruction-number">2.</span> If you don't have a .bash_profile in your '~/' directory create it.
                  <i className={ collapseID==="PortalRegistration2" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
                </MDBCollapseHeader>
                <MDBCollapse id="PortalRegistration2" isOpen={collapseID}>
                  <MDBCardBody>
                    <img className="rounded mx-auto d-block" src={createBashProfile}/>
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
              <MDBCard>
                <MDBCollapseHeader onClick={(e) => this.toggleCollapse("PortalRegistration3", e)}>
                  <span className="alexa-instruction-number">3.</span> In your editor, copy and paste the script into '.bash_profile' and save. Restart Terminal
                  <i className={ collapseID==="PortalRegistration3" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
                </MDBCollapseHeader>
                <MDBCollapse id="PortalRegistration3" isOpen={collapseID}>
                  <MDBCardBody>
                    <img className="rounded mx-auto d-block" src={copyPasteScript}/>
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
              <MDBCard>
                <MDBCollapseHeader onClick={(e) => this.toggleCollapse("PortalRegistration4", e)}>
                  <span className="alexa-instruction-number">4.</span> Open Junos Pulse and click 'Connect'
                  <i className={ collapseID==="PortalRegistration4" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
                </MDBCollapseHeader>
                <MDBCollapse id="PortalRegistration4" isOpen={collapseID}>
                  <MDBCardBody>
                    <img className="rounded mx-auto d-block" src={connect}/>
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
              <MDBCard>
                <MDBCollapseHeader onClick={(e) => this.toggleCollapse("PortalRegistration5", e)}>
                  <span className="alexa-instruction-number">5.</span> Copy the grid challenge
                  <i className={ collapseID==="PortalRegistration5" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
                </MDBCollapseHeader>
                <MDBCollapse id="PortalRegistration5" isOpen={collapseID}>
                  <MDBCardBody>
                    <img className="rounded mx-auto d-block" src={getCode}/>
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
              <MDBCard>
                <MDBCollapseHeader onClick={(e) => this.toggleCollapse("PortalRegistration6", e)}>
                  <span className="alexa-instruction-number">6.</span> Go to terminal and enter 'vpn [Paste grid challenge here]'
                  <i className={ collapseID==="PortalRegistration6" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
                </MDBCollapseHeader>
                <MDBCollapse id="PortalRegistration6" isOpen={collapseID}>
                  <MDBCardBody>
                    <img className="rounded mx-auto d-block" src={pasteCode}/>
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
              <MDBCard>
                <MDBCollapseHeader onClick={(e) => this.toggleCollapse("PortalRegistration7", e)}>
                  <span className="alexa-instruction-number">7.</span> Copy the response and paste into the Response text field. Hit enter
                  <i className={ collapseID==="PortalRegistration7" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
                </MDBCollapseHeader>
                <MDBCollapse id="PortalRegistration7" isOpen={collapseID}>
                  <MDBCardBody>
                    <img className="rounded mx-auto d-block" src={outputGridResponse}/>
                    <img className="rounded mx-auto d-block" src={getCode}/>
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
              <MDBCard>
                <MDBCollapseHeader onClick={(e) => this.toggleCollapse("PortalRegistration8", e)}>
                  <span className="alexa-instruction-number">7.</span> Click 'Connect'. You should now be on the VPN!
                  <i className={ collapseID==="PortalRegistration8" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
                </MDBCollapseHeader>
                <MDBCollapse id="PortalRegistration8" isOpen={collapseID}>
                  <MDBCardBody>
                    <img className="rounded mx-auto d-block" src={connected}/>
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
            </div>
          </MDBContainer>
      );
    }
  }

export default App;
