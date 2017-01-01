import React from 'react';

class SplitPane extends React.Component {
    render() {
        return(
            <div className="SplitPane">
                <div className="SplitPane-left">
                    {this.props.left}
                </div>
                <div className="SplitPane-right">
                    {this.props.right}
                </div>
            </div>
        );
    }
}

class Apps extends React.Component {
    render() {
        return(
            <SplitPane
                left={
                    <Contacts />
                }
                right={
                    <Chat />
                } />
        );
    }
}

class Contacts extends React.Component {
    render() {
        return(
            Contacts
        );
    }
}

class Chat extends React.Component {
    render() {
        return(
            Chat
        );
    }
}

class FancyBorder extends React.Component {
    render() {
        return (
          <div className={'FancyBorder FancyBorder-' + this.props.color}>
              {this.props.children}
          </div>
        );
    }
}

class WelcomeDialog extends React.Component {
    render() {
        return (
            <Dialog title="Welcome" message="Thank uyou for visiting our spacecraft!"/>
        );
    }
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {
            login : ''
        };
    }

    handleChange(e) {
        this.setState({
            login : e.target.value
        })
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program" message="How should we refer to you?">
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        );
    }
}

class Dialog extends React.Component {
    render() {
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    {this.props.title}
                </h1>
                <p className="Dialog-message">
                    {this.props.message}
                </p>
                {this.props.children}
            </FancyBorder>
        );
    }
}


export default SignUpDialog;