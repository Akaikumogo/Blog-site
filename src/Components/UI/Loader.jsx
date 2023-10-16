import { Ring } from "@uiball/loaders";
const Loader = () => {
  return (
    <div className="w-full h-[75vh] flex items-center justify-center">
      <Ring className="absolute top-0 left-0 w-full h-screen" />
    </div>
  );
};

export default Loader;
