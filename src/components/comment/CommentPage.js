import React, { Component } from "react";

// import { Link } from "react-router-dom";


class CommentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,

        }

    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/fattymiller/youtube-test/comments')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })

            });
        // .then(json => console.log(json))
    }


    render() {

        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>..Loading</div>;
        } else {
            return (

                <table>
                    <thead>

                        <tr >
                            <th>Date</th>
                            <th>Comment</th>

                        </tr>

                    </thead>

                    <tbody>

                        {items.map(item => (
                            <tr key={item.id}>

                                <td>{item.date}</td>
                                <td>{item.body}</td>

                            </tr>

                        ))}
                    </tbody>
                </table >
            );
        }
    }

}


export default CommentPage;
