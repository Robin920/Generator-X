import React from 'react';
import Header from '../Header/Header';
import ResultContainer from '../ResultContainer/ResultContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {

    state = {
        secondtext : "Name IT!",
        headerExpand: true,
        suggestNames: []
    };

    handleInputChange = (inputText) => {
        this.setState({suggestNames: inputText?name(inputText):[]});
        this.setState({headerExpand:!inputText});
    };
    render()
    {
        return (
            <div>
                <Header headerExpand={this.state.headerExpand} 
                titletext = {this.state.secondtext}
                />
                <SearchBox onInputChange={this.handleInputChange}/>
                <ResultContainer suggestNames={this.state.suggestNames}/>
            </div>
        );
    };
};
export default App;