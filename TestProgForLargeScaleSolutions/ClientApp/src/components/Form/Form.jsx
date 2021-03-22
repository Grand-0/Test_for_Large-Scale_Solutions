import React from "react";
import styles from "./Form.module.css";
import Word from "../Word/Word";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.changeCheckboxHandle = this.changeCheckboxHandle.bind(this);
        this.changeTextboxHandle = this.changeTextboxHandle.bind(this);
        this.FilterByLength = this.FilterByLength.bind(this);
        this.FilterBySubString = this.FilterBySubString.bind(this);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            substring: "",
            camelCaseFilter: false
        };
    }

    changeTextboxHandle(e){
        this.setState({substring: e.target.value});
    }

    changeCheckboxHandle(e){
        this.setState({camelCaseFilter: e.target.checked});
    }

    FilterByLength(e){
        if(isNaN(this.state.substring) == false){
            let query = "http://localhost:7750/context/getByNums?countSymbols="+ this.state.substring +"&camelCaseFilter="+ this.state.camelCaseFilter;
            fetch(query)
            .then(result => result.json())
            .then(data => {
                this.setState({
                    items: data,
                    isLoaded: true
                });
            })
            .catch(e => alert(e));
        }
    }

    FilterBySubString(e){
            const query = "http://localhost:7750/context/getByString?clientString="+ this.state.substring +"&camelCaseFilter="+ this.state.camelCaseFilter;
            fetch(query)
            .then(result => result.json())
            .then(data => {
                this.setState({
                    items: data,
                    isLoaded: true
                });
            })
            .catch(e => alert(e));
    }

    render(){
        const {error, isLoaded, items} = this.state;
        return(
            <div className={styles.formContainer}>
                <div className={styles.inputContent}>
                    <input type="text" onChange={this.changeTextboxHandle} className={styles.textInput}/>
                    <input type="checkbox" onChange={this.changeCheckboxHandle} className={styles.checkbox}/>
                    <label className={styles.label}>Ignore case</label>
                </div>
                <button onClick={this.FilterByLength} className={styles.buttonFilterLength}>Filter by word lenght</button>
                <button onClick={this.FilterBySubString} className={styles.buttonFilterSubstring}>Filter by substring</button>
                <div className={styles.output}>
                {items.map(item => 
                    <Word context={item}/>)}
                </div>
            </div>
        );
    }
}

export default Form;