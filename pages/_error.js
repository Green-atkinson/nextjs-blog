// 500 errors are handled both client-side and server-side by Error componenet
// Use this to override it
// Only used in production. In development you’ll get an error with the call stack to know where the error originated from

function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
   
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
   
  export default Error