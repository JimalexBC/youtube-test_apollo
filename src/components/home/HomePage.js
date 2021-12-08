
import React, { Component } from "react";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/fattymiller/youtube-test/videos')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })

            });
    }


    render() {

        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>..Loading</div>;
        } else {
            return (
                <div className="HomePage">

                    <table>
                        <thead>

                            <tr >
                                <th>Title</th>
                                <th>Video Comments</th>
                            </tr>

                        </thead>

                        {items.map(item => (
                            <tr key={item.id}>

                                <td>
                                    <a href={"https://my-json-server.typicode.com/fattymiller/youtube-test/videos/" + item.id}>{item.title}</a>
                                </td>

                                <td>
                                    <a href={"https://my-json-server.typicode.com/fattymiller/youtube-test/videos/" + item.id + "/comments"}>look comment</a>
                                </td>

                            </tr>

                        ))}


                    </table>

                </div>

            );
        }
    }
}

export default HomePage;