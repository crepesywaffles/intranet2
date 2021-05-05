import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"

export default class Podcast extends Component {
    render() {
        return (
            <Layout>
                <iframe src="https://open.spotify.com/embed-podcast/episode/6Ocfap9tgaZ8PxLxmMm99k" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed-podcast/episode/7Ih9ZhWWeGeAQ5aS8m3AaG" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed-podcast/episode/4bzHkPuK0YjqAlzD2VMke0" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed-podcast/episode/5N1avaNf5vLQCekjIfFkbE" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </Layout>
        )
    }
}
