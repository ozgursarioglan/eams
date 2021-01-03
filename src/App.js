import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src="https://instela-static.info/s/images/instela-desktop@2x.png" alt=""/>
          <br/>
        <p>
           bu playlist sayın <a href="https://tr.instela.com/user/ekmek-arasi-maden-suyu--173406" type="button" className="btn btn-light">ekmek arası maden suyu</a> için hazırlanmıştır.
        </p>
          <br/>
          <iframe title="EAMS" src="https://open.spotify.com/embed/playlist/2hsqMXAzjjhKHlgVzIdrAb" width="600" height="380"
    frameBorder="0" allowTransparency="true" allow="encrypted-media"/>
      </header>
    </div>
  );
}

export default App;
