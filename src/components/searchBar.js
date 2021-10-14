import React, { Component } from "react";
import { Field, ReduxForm } from "redux-form";

class SearchBar extends Component {

    handleFormSubmit = function({query}) {
        console.log("trying to handle query submit", query)
    }

    renderInput(field) {
        return <input type="text" placeholder="Search DailySmarty" {...field.input} />
    }

    render () {

        const { handleSubmit } = this.props;

        return (
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="query" component={this.renderInput}/>
            </form>
        )
    }
}
SearchBar = ReduxForm({
    form: 'searchBar'
})(SearchBar);

export default SearchBar;