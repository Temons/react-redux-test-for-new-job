import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchMoreCharacters, fetchCharacters } from "../../redux/actions";
import Character from "../character";
import "./ItemList.scss";

class ItemList extends Component {
  state = {
    characters: null,
  };

  componentDidMount() {
    const { fetchCharacters } = this.props;

    fetchCharacters();

    window.addEventListener("scroll", this.scrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  }

  scrollListener = () => {
    const { loading } = this.props;

    let scroll = window.scrollY;
    const screenHeight =
      document.body.scrollHeight - document.documentElement.clientHeight;

    if (scroll > screenHeight && !loading) {
      this.loadMoreCharacters();
    }
  };

  loadMoreCharacters = () => {
    const { characters, loadingMore, info, fetchMoreCharacters } = this.props;
    if (characters.length < 40 && !loadingMore) {
      fetchMoreCharacters(info.next);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.characters.length !== this.props.characters.length) {
      this.setState({ characters: this.props.characters });
    }
  }

  render() {
    const { loading } = this.props;
    const { characters } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    } else {
      return (
        <>
          {characters &&
            characters?.map((item) => {
              return (
                <NavLink
                  to={`/items/${item.id}`}
                  key={item.id}
                  className="linkTo"
                >
                  <Character item={item} />
                </NavLink>
              );
            })}
        </>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.results,
    info: state.info,
    loading: state.loading,
    loadingMore: state.loadingMore,
  };
};

const mapDispatchToProps = {
  fetchCharacters,
  fetchMoreCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
