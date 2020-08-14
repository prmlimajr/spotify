import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import Loading from '../Loading';

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        })
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <aside className='container'>
        <div className='lists'>
          <ul className='main'>
            <li>
              <Link to='/'>Navegar</Link>
            </li>
            <li>
              <a href='#'>Rádio</a>
            </li>
          </ul>

          <ul>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <Link to='#'>Seu Daily Mix</Link>
            </li>
            <li>
              <Link to='#'>Tocados Recentementes</Link>
            </li>
            <li>
              <Link to='#'>Músicas</Link>
            </li>

            <li>
              <Link to='#'>Álbuns</Link>
            </li>
            <li>
              <Link to='#'>Artistas</Link>
            </li>
            <li>
              <Link to='#'>Estações</Link>
            </li>
            <li>
              <Link to='#'>Arquivos Locais</Link>
            </li>
            <li>
              <Link to='#'>Vídeos</Link>
            </li>
            <li>
              <Link to='#'>Podcasts</Link>
            </li>
          </ul>

          <ul>
            <li>
              <span>PLAYLISTS</span>
              {this.props.playlists.loading && <Loading />}
            </li>
            {this.props.playlists.data.map((playlist) => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <button className='new-playlist'>
          <img src={AddPlaylistIcon} alt='Adicionar Playlist' />
          Nova playlist
        </button>
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  playlists: state.playlists,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
