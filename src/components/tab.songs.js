import React from 'react';
import moment from 'moment';
import { Row, Pagination } from './elements';

const TabSongs = (props) => (
    <section>
        <div className="tabs-vertical">
            {
                props.songs.map((value, index) =>
                    <Row key={`song${ index }`} text1={value.title} text2={value.album}
                        text3={value.artists ? value.artists[0] : ""}
                        text4={moment(value.duration * 1000).format('mm:ss')}
                        fn={() => props.fn({ title: value.title })} />
                )
            }
        </div>
        <Pagination />
    </section>
);

export default TabSongs;