import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="for-header">
                    <h1>Page Not Found</h1>
                    <p>This page was not found.<br/>Click <a href="/">here</a> to return home</p>
                </div>
            </div>
        )
    }
}

export default NotFound;