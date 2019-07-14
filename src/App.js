import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header.js';
import Container from '@material-ui/core/Container';
import Home from './Home.js';
import RegisterChef from './RegisterChef.js';
import ContactUs from './ContactUs.js';
import EventRegister from './Event/EventRegister.js';
import EventStep1 from './Event/EventStep1.js';
import EventStep2 from './Event/EventStep2.js';
import EventStep3 from './Event/EventStep3.js';
import EventStep4 from './Event/EventStep4.js';
import EventStep5 from './Event/EventStep5.js';
import EventStep6 from './Event/EventStep6.js';
import EventStep7 from './Event/EventStep7.js';
import EventResume from './Event/EventResume.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      section: 1,

      myEvent: {
        eventName: '',
        guests: '',
        mealType: '',
        foodType: '',
        date: '',
        restrictions: '',
        chef: 0,
        price: 0,
        contactName: '',
        contactEmail: '',
        contactPhone: 0
      },
      chef: [
        { id:1, picture: "assets/chef1.png", name: 'Julio Gonzalez' },
        { id:2, picture: "assets/chef2.png", name: 'Pedro Rivero' },
        { id:3, picture: "assets/chef3.png", name: 'Santiago Lima' },
        { id:4, picture: "assets/chef4.png", name: 'Julio Rodriguez' },
        { id:5, picture: "assets/chef5.png", name: 'Melissa Perez' }
    ],
    };
  }

  changeEventData = (name, value) => {
    this.setState({
      myEvent: {
        ...this.state.myEvent, 
        [name]: value
      }
    })
  }


  onClearEvent = () => {
    this.setState({ 
      myEvent: {
      eventName: '',
      guests: '',
      mealType: '',
      foodType: '',
      date: '',
      restrictions: '',
      chef: 1,
      price: '',
      contact: {
        name: '',
        email: '',
        phone: '',
      }
    } });
  };

  goToHome = () => {
    this.setState({
      section: 1
    });
  }

  goToHowItWorks = () => {
    this.setState({
      section: 2
    });
  }

  goToEventRegister = () => {
    this.setState({
      section: 3,
    });
  }
  goToEventStep1 = () => {
    this.setState({
      section: 31
    });
  }
  goToEventStep2 = () => {
    this.setState({
      section: 32
    });
  }
  goToEventStep3 = () => {
    this.setState({
      section: 33
    });
  }
  goToEventStep4 = () => {
    this.setState({
      section: 34
    });
  }
  goToEventStep5 = () => {
    this.setState({
      section: 35
    });
  }
  goToEventStep6 = () => {
    this.setState({
      section: 36
    });
  }
  goToEventStep7 = (e) => {
    this.setState({
      section: 37,
    });
  }
  goToEventResume = (e) => {
    this.setState({
      section: 38,
    });
  }

  goToRegisterChef = () => {
    this.setState({
      section: 4
    });
  }

  goToContactUs = () => {
    this.setState({
      section: 5
    });
  }

  currentSection() {
    if (this.state.section === 1) {
      return <Home />;
    }

    if (this.state.section === 3) {
      return <EventRegister
        myEvent={this.state.myEvent}
        changeEventData={this.changeEventData}
        goToEventStep1={this.goToEventStep1}
      />;
    }
    if (this.state.section === 31) {
      return <EventStep1
        myEvent={this.state.myEvent}
        changeEventData={this.changeEventData}
        goToEventStep2={this.goToEventStep2}
      />;
    }
    if (this.state.section === 32) {
      return <EventStep2
        myEvent={this.state.myEvent}
        changeEventData={this.changeEventData}
        goToEventStep3={this.goToEventStep3}
      />;
    }
    if (this.state.section === 33) {
      return <EventStep3
        myEvent={this.state.myEvent}
        changeEventData={this.changeEventData}
        goToEventStep4={this.goToEventStep4}
      />;
    }
    if (this.state.section === 34) {
      return <EventStep4
        myEvent={this.state.myEvent}
        changeEventData={this.changeEventData}
        goToEventStep5={this.goToEventStep5}
        goToEventResume={this.goToEventResume}
      />;
    }
    if (this.state.section === 35) {
      return <EventStep5
        myEvent={this.state.myEvent}
        changeEventData={this.changeEventData}
        goToEventStep6={this.goToEventStep6}
      />;
    }

    if (this.state.section === 36) {
      return <EventStep6
        myEvent={this.state.myEvent}
        chef={this.state.chef}
        changeEventData={this.changeEventData}
        goToEventStep7={this.goToEventStep7}
      />;
    }

    if (this.state.section === 37) {
      return <EventStep7
        myEvent={this.state.myEvent}
        changeEventData={this.changeEventData}
        goToEventResume={this.goToEventResume}
      />;
    }

    if (this.state.section === 38) {
      return <EventResume
      myEvent={this.state.myEvent}
      eventChef={this.state.chef}
      changeEventData={this.changeEventData}
      />;

    }

    if (this.state.section === 4) {
      return <RegisterChef />;
    }

    if (this.state.section === 5) {
      return <ContactUs />;
    }
  }


  render() {
    return (
      <div>

        <Header
          goToHome={this.goToHome}
          goToEventRegister={this.goToEventRegister}
          goToRegisterChef={this.goToRegisterChef}
          goToContactUs={this.goToContactUs}
        />
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm" style={{ height: '100vh' }} >

            {this.currentSection()}
          </Container>
        </React.Fragment>

      </div>
    );
  }
}

export default App;
