const Root = function () {
 return <div className="app">
      <Header />

      <div className="main">
        <NavBar />
        <Hero />
      </div>

      <NewReleases />
      <Popular />
      <MusicBar />
    </div>
}

export default Root