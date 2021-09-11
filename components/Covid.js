const Covid = ({nv, ay, covid}) => {
  return (
    <div className="bg-greenCov text-white w-full mb-4 lg:mb-12 flex flex-col lg:flex-row flex-wrap justify-center items-strech">
      <div className="w-full lg:w-1/4">
        <div className="h-full flex justify-center items-center bg-white border-8 border-greenCov py-4">
          <h4 className="text-center text-5xl lg:text-6xl font-bold text-greenCov">
            {nv}
          </h4>
        </div>
      </div>
      <div className="w-full lg:w-3/4">
        <div className="flex flex-col justify-center items-center py-6 px-2 text-center">
          <h5 className="text-4xl lg:text-5xl font-bold">
            &ldquo;
            {ay}
            &rdquo;
          </h5>
          <p className="text-2xl lg:text-3xl my-2">
            {covid}
          </p>
          <h6 className="text-5xl font-bold text-white">08 01 00 47 47</h6>
        </div>
      </div>
    </div>
  )
}

export default Covid