import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import VideoPage from "./video/VideoPage";
import User from "./user/UserPage";

import CommentPage from "./comment/CommentPage";

// import useVideos from "./hook/useVideos";
// import useFeaturedVideos from "./home/featured-video";

// import FeaturedVideos from "./hook/useFeaturedVideos";


function App() {

    // const allVideos = useVideos();

    // const featuredVideo = useFeaturedVideos(allVideos);

    return (
        <div className="container-fluid">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/video" component={VideoPage} />
                    <Route path="/user" component={User} />
                    <Route path="/comment" component={CommentPage} />

                    {/* <Route path="/">
                        <FeaturedVideos video={featuredVideo} />
                    </Route> */}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
