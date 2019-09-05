import { useAuth0 } from "../lib/react-auth0";

export default () => {
  const { isAuthenticated, loginWithRedirect, logout, user, loading } = useAuth0();

  return (
    <div>
      <h1>Hello World</h1>
      {/* TODO: fix the flash of 'loading' state */}
      {loading && <p>loading...</p>}
      {!loading && !isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>
          Log in
        </button>
      )}
      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  )
}
