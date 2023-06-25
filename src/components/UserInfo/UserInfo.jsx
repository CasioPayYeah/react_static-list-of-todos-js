// Add the required props
export const UserInfo = ({ user }) => (
  <>
    <a className="UserInfo" href={`mailto:${user.email}`}>
      <p>
        {user.name}
      </p>
    </a>
  </>
);
