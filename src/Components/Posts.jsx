import React from "react";
import post from "./Post";

function postList() {
    return (
        <div>
            <h3>Posts</h3>
            <ul>
                {post}
                {post}
                {post}
            </ul>
        </div>
    )
}

export default postList;