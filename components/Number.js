import Image from 'next/image'

const Number = ({number, index, ...extra}) => {
  return (
    <div className={"w-full " + ((index > 5) ? "lg:w-1/2" : "lg:w-1/3")} {...extra}>
      <div className={"m-2 lg:mx-6 py-8 px-6 text-center " + number.bg}>
        {number.image && <Image
          src={number.image}
          alt={number.name}
          width={100}
          height={100}
        />}
        <h2 className="text-white font-medium text-2xl mt-6 mb-4 uppercase">{number.name}</h2>
        <h3 className={"direction-ltr font-bold text-white " + ((index > 2) ? "text-7xl" : "text-5xl")}>{number.phone}</h3>
      </div>
    </div>
  )
}

export default Number