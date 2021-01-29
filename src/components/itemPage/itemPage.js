import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOneCharacter } from "../../redux/actions";
import "./itemPage.scss";

class ItemPage extends Component {
  componentDidMount() {
    this.props.fetchOneCharacter(this.props.match.params.id);
  }

  render() {
    const { choosedCharacter, loading } = this.props;

    if (loading) {
      return <p>Loading...</p>;
    } else {
      return (
        <>
          <div className="wrapper">
            {choosedCharacter && (
              <div className="character">
                <p className="character-gender">{choosedCharacter.gender}</p>
                <h1>{choosedCharacter.name}</h1>
                <p className="character-status">{choosedCharacter.status}</p>
                <img src={choosedCharacter.image} alt="icon" />
                <p className="character-species">{choosedCharacter.species}</p>
                <p className="character-location">
                  Location: {choosedCharacter.location.name}
                </p>
                <h2>Episodes</h2>
                <ul>
                  {choosedCharacter.episode.slice(-5).map((episode) => {
                    return <li key={episode}>{episode}</li>;
                  })}
                </ul>
              </div>
            )}
          </div>
          <button
            className="btn-back"
            onClick={() => this.props.history.goBack()}
          >
            BACK
          </button>
        </>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    choosedCharacter: state.choosedCharacter,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  fetchOneCharacter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
