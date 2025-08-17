import Image from "next/image";

const Adminpage = () => {
  return (
    <div className="text-white text-5xl flex items-center justify-center text-center">
      <Image
        src={"https://i.ibb.co.com/4gwmm3zF/unnamed-removebg-preview.png"}
        alt="cover"
        width={700}
        height={400}
        className="bg-cover"
      />
      <br />
    </div>
  );
};

export default Adminpage;
