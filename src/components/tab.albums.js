import React from 'react';
import { Card } from './elements';

const TabAlbums = (props) => (
    <div className="tabs-horizontal">
        {
            props.albums.map((value, index) => {
                return <Card key={`album${ index }`} image={value.picture}
                    title={value.album}
                    subtitle={value.artists ? value.artists[0] : ""}
                    fn={() => props.fn({album: value.album})} />
            })
        }
    </div>
);

export default TabAlbums;