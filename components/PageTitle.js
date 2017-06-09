export default ({ children }) => (
  <h1>
    <style jsx>{`
      h1 {
        font-family: 'Barrio', cursive;
        font-size: 4em;
        margin: 0.5em 0;
        text-align: center;
        color: #2f2933;
      }
    `}</style>

    {children}
  </h1>
)
