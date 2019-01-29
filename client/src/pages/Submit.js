import React, { Component } from 'react';
import API from "../utils/API";

class Submit extends Component {

    state = {
        name: "",
        imgUrl: ""
    };

    handleInputField = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        API
            .addChihuahua(this.state)
            .then(res => {
                alert(res.data.name);
                this.setState({
                    name: "",
                    imgUrl: ""
                });
            });
    };



    render() {
        return (
            <div className="container">
                <h1>Submit your Chihuahua!</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="Enter email"
                            onChange={this.handleInputField}
                            name="name"
                            value={this.state.name} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="img-url">Img URL</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="img-url" 
                            placeholder="Image url" 
                            onChange={this.handleInputField}
                            name="imgUrl"
                            value={this.state.imgUrl} 
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Submit;
