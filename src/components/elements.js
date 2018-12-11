import React from 'react';
import { connect } from 'react-redux';
import { getAlbums, getSongs } from '../store_manager/actions'

const Card = (props) => {
    const style = { backgroundImage: `url(data:image/png;base64,${props.image})` };
    return (
        <div className="card" style={style}>
            <div className="card-play" onClick={props.fn}>
                <i className="fa fa-2x fa-play-circle"></i>
            </div>
            <div className="card-detail">
                <h3>{props.title}</h3>
                <h4>{props.subtitle}</h4>
            </div>
        </div>
    );
}

const Avatar = (props) => {
    const style = { backgroundImage: `url('${props.image}')` };
    return (
        <div className="avatar">
            <div className="avatar-image" style={props.image ? style : null}>
                <i className="fa fa-2x fa-play-circle"></i>
            </div>
            <div className="avatar-detail">
                <h3>{props.title}</h3>
                <h4>{props.subtitle}</h4>
            </div>
        </div>
    );
}

const Row = (props) => {
    return (
        <div className="row">
            <div className="column" onClick={props.fn}>
                <i className="fa fa-2x fa-play-circle"></i>
            </div>
            <div className="column">
                {props.text1}
            </div>
            <div className="column">
                {props.text2}
            </div>
            <div className="column">
                {props.text3}
            </div>
            <div className="column">
                {props.text4}
            </div>
        </div>
    );
}

const SearchInput = (props) => (
    <div className="search-box">
        <input type="search" name="search" id="search" onChange={props.search}
            placeholder="Find something..." aria-label="Find something"
            autoComplete="off" />
        <i className="fa fa-search"></i>
    </div>
);

class PaginationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        }
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    prevPage() {
        let actualPage = this.state.page - 1;
        if (actualPage > 0) {
            this.props.getSongs(actualPage);
            this.setState({
                page: actualPage
            });
        }
    }

    nextPage() {
        let actualPage = this.state.page + 1;
        this.props.getSongs(actualPage);
        this.setState({
            page: actualPage
        });
    }

    render() {
        return (
            <div className="pagination">
                <button type="button" onClick={this.prevPage}>
                    <i className="fa fa-arrow-circle-left"></i>
                    <span>Previus</span>
                </button>
                <span>{this.state.page}</span>
                <button type="button" onClick={this.nextPage}>
                    <i className="fa fa-arrow-circle-right"></i>
                    <span>Next</span>
                </button>
            </div>
        );
    }
}

const mapToDispatchToProps = (dispatch) => {
    
    return {
        getSongs: (page) => {
            const search = document.getElementById('search');
            const params = {
                skip: (page-1)*50
            }

            if (search.value) {
                params.title = search.value;
                params.album = search.value;
            }

            return dispatch(getSongs(params))
        },
        search: (evt) => {
            const value = evt.target.value;
            if (value) {
                dispatch(getSongs({
                    title: value,
                    album: value,
                }));
                dispatch(getAlbums({
                    album: value
                }));
            } else {
                dispatch(getSongs({}));
                dispatch(getAlbums({}));
            }
        }
    }
}

const Pagination = connect(null, mapToDispatchToProps)(PaginationComponent);
const Search = connect(null, mapToDispatchToProps)(SearchInput);

export { Card, Avatar, Row,  Pagination, Search};