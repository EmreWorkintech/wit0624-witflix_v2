/* eslint-disable react/prop-types */
function Browse(props) {
  const { user, activeProfile } = props;

  return (
    <div>
      Browse {user.name}, {activeProfile.title}{" "}
    </div>
  );
}

export default Browse;
