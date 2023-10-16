const SubNavbar = () => {
  const searchPosts = (val) => {
    console.log(val);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for titles..."
        className=" border rounded-lg p-2 px-3 w-full"
        onChange={(e) => searchPosts(e.target.value)}
      />
    </div>
  );
};

export default SubNavbar;
