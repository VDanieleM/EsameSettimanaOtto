import React from 'react';

class Chiamata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.nomedelfilm !== prevProps.nomedelfilm) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=c090253c&s=${this.props.nomedelfilm}`);

      if (!response.ok) {
        throw new Error('Errore nella richiesta API');
      }

      const data = await response.json();
      console.log(data.Search);
      this.setState({ data: data.Search.slice(0, 6) });
    } catch (error) {
      this.setState({ error: <p className="text-danger"> Si è verificato un errore durante il recupero dei dati. </p> });
    }
  };

  render() {
    const { data, error } = this.state;

    if (error) {
      return <div>Errore: {error}</div>;
    }

    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
        {data && data.map((item) => (
          <div key={item.imdbID}>
            <img className="col mb-2 px-1 img-fluid" src={item.Poster} alt="movie picture" />
          </div>
        ))}
      </div>
    );
  }
}

export default Chiamata;