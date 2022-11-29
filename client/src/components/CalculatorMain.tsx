import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const initialCalculatorValues = {
  totalNoOfViewers: {
    value: 1000,
    title: "Total number of viewers of your live stream when it ends",
    isValid: "",
  },
  noOfLogos: {
    value: 3,
    title: "Number of company logos displayed throughout the stream",
  },
  avgNoOfConViewers: {
    value: 1000,
    title: "Average number of concurrent viewers in your live stream",
    isValid: "",
  },
  noOfTimesAdPlayed: {
    value: 3,
    title: "Number of times you play the Ad in the stream",
  },
  associatedStreamers: {
    value: 10,
    title: "Number of associated streamers",
    isValid: "",
  },
  avgNoOfAudience: {
    value: 1000,
    title: "Average number of audience viewers per streamer",
    isValid: "",
  },
};

const CalculatorInput = ({
  calculatorValues,
  id,
  name,
  setCalculatorValues,
}: any) => {
  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;

    const re = /^[0-9\b]+$/;

    const currentName = calculatorValues[name as keyof typeof calculatorValues];

    const isZeroAtStart = String(value).charAt(0) === "0"

    if ((value === "" || re.test(value)) && (String(value).length <= 12) && !isZeroAtStart) {
      setCalculatorValues({
        ...calculatorValues,
        [name]: { ...currentName, value, isValid: true },
      });
    } else {
      if (String(value).length < 12){
          setCalculatorValues({
            ...calculatorValues,
            [name]: { ...currentName, isValid: false },
          });
      }
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-gray-100" htmlFor={name}>
        {calculatorValues[name as keyof typeof calculatorValues].title}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        className={clsx(
          "py-1 px-2 rounded-sm outline-none transition-all duration-200 border-gray-600 border bg-transparent",
          (calculatorValues[name as keyof typeof calculatorValues].isValid as any) === true &&
            "border focus:border-green-400",
          (calculatorValues[name as keyof typeof calculatorValues].isValid as any) === false &&
            "border focus:border-red-400",
          (calculatorValues[name as keyof typeof calculatorValues].isValid as any) === "" &&
            "border focus:border-green-400"
        )}
        value={calculatorValues[name as keyof typeof calculatorValues].value}
        onChange={handleChange}
      />
    </div>
  );
};

const CalculatorMain = () => {
  const [isStreamer, setStreamer] = useState(true);
  const [isBannerAd, setIsBannerAd] = useState(true);
  const [calculatorValues, setCalculatorValues] = useState(
    initialCalculatorValues
  );
  const [result, setResult] = useState<number | null>(3000);

  const handleSliderChange = (value: any) => {
    if (isBannerAd && isStreamer) {
      setCalculatorValues({
        ...calculatorValues,
        noOfLogos: { ...calculatorValues.noOfLogos, value },
      });
    }

    if (!isBannerAd && isStreamer) {

      setCalculatorValues({
        ...calculatorValues,
        noOfTimesAdPlayed: { ...calculatorValues.noOfTimesAdPlayed, value },
      });
    }
  };

  useEffect(()=>{
    if(isStreamer && isBannerAd){
      const x = Number(calculatorValues.totalNoOfViewers.value);
      const y = Number(calculatorValues.noOfLogos.value);
      const res = x*y
      setResult(res)
    }

    if (isStreamer && !isBannerAd) {
      const x = Number(calculatorValues.avgNoOfConViewers.value);
      const y = Number(calculatorValues.noOfTimesAdPlayed.value);
      const res = x * y;
      setResult(res);
    }

    if (!isStreamer) {
      const x = Number(calculatorValues.associatedStreamers.value);
      const y = Number(calculatorValues.avgNoOfAudience.value);
      const res = x * y;
      setResult(res);
    }

  }, [calculatorValues, isStreamer, isBannerAd])
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-105px)] select-none">
      <div className="w-full flex pb-8 pt-16 md:justify-center items-center flex-col -translate-y-8">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl mb-8">Live's Calculator</h2>
        </div>
        <div className="flex px-2 flex-wrap justify-center text-md md:text-xl gap-2 md:flex-row md:gap-4 mb-8">
          <span
            onClick={() => setStreamer(true)}
            className={clsx(
              "cursor-pointer transition-all duration-300",
              "px-[1px] py-[1px] rounded-sm md:rounded-md flex",
              isStreamer &&
                "bg-gradient-to-r cursor-pointer from-gray-600 to-blue-200"
            )}
          >
            <span className="w-full text-center bg-black rounded-sm md:rounded-md p-1 px-4 md:px-3">
              I am a streamer
            </span>
          </span>
          <span
            onClick={() => setStreamer(false)}
            className={clsx(
              "cursor-pointer transition-all duration-300",
              "px-[1px] py-[1px] rounded-sm md:rounded-md flex",
              !isStreamer &&
                "bg-gradient-to-r cursor-pointer from-gray-600 to-blue-200"
            )}
          >
            <span className="w-full relative bg-black rounded-sm md:rounded-md p-1 px-4">
              I am an advertiser
            </span>
          </span>
        </div>
        <div className="w-[90%] min-h-[360px] lg:w-[65%] transition-all duration-300 border border-dashed rounded-sm md:rounded-md border-blue-300 flex md:flex-row flex-col items-stretch justify-center">
          <div className="w-full md:w-1/2 px-6 pt-5 pb-2 relative flex flex-col">
            <div className="w-full h-10 flex justify-center">
              <span
                onClick={() => setIsBannerAd(true)}
                className={clsx(
                  "text-center flex items-center justify-center w-1/2 cursor-pointer transition-all duration-300",
                  "p-2",
                  isBannerAd && "text-black bg-white",
                  "border border-white rounded-l-md"
                )}
              >
                In-Banner ads
              </span>
              <span
                onClick={() => setIsBannerAd(false)}
                className={clsx(
                  "text-center flex items-center justify-center w-1/2 cursor-pointer transition-all duration-300",
                  "p-2",
                  !isBannerAd && "text-black bg-white",
                  "border border-white rounded-r-md"
                )}
              >
                In-Video ads
              </span>
            </div>
            <div className="py-4 pt-6 flex flex-col gap-8">
              {isStreamer && isBannerAd && (
                <CalculatorInput
                  calculatorValues={calculatorValues}
                  name={"totalNoOfViewers"}
                  setCalculatorValues={setCalculatorValues}
                ></CalculatorInput>
              )}
              {isStreamer && !isBannerAd && (
                <CalculatorInput
                  calculatorValues={calculatorValues}
                  name={"avgNoOfConViewers"}
                  setCalculatorValues={setCalculatorValues}
                ></CalculatorInput>
              )}
              {!isStreamer && (
                <CalculatorInput
                  calculatorValues={calculatorValues}
                  name={"associatedStreamers"}
                  setCalculatorValues={setCalculatorValues}
                ></CalculatorInput>
              )}
              {!isStreamer && (
                <CalculatorInput
                  calculatorValues={calculatorValues}
                  name={"avgNoOfAudience"}
                  setCalculatorValues={setCalculatorValues}
                ></CalculatorInput>
              )}
              {isStreamer && isBannerAd && (
                <div className="flex flex-col gap-3">
                  <span className="text-gray-100">
                    {calculatorValues.noOfLogos.title}
                  </span>
                  <span className="">
                    <Slider
                      handleStyle={{
                        background: "#03a9f4",
                      }}
                      trackStyle={{
                        background:
                          "linear-gradient(to right, #00d2ff, #3a7bd5)",
                      }}
                      railStyle={{
                        background: "rgb(243 244 246)",
                      }}
                      onChange={handleSliderChange}
                      min={1}
                      max={6}
                      startPoint={1}
                      defaultValue={calculatorValues.noOfLogos.value}
                    ></Slider>
                  </span>
                  <span className="bg-gray-800 rounded-sm text-center py-1">
                    {calculatorValues.noOfLogos.value}
                  </span>
                </div>
              )}
              {isStreamer && !isBannerAd && (
                <div className="flex flex-col gap-3">
                  <span className="text-gray-100">
                    {calculatorValues.noOfTimesAdPlayed.title}
                  </span>
                  <span className="">
                    <Slider
                      handleStyle={{
                        background: "#03a9f4",
                      }}
                      trackStyle={{
                        background:
                          "linear-gradient(to right, #00d2ff, #3a7bd5)",
                      }}
                      railStyle={{
                        background: "rgb(243 244 246)",
                      }}
                      onChange={handleSliderChange}
                      min={1}
                      max={20}
                      startPoint={1}
                      defaultValue={calculatorValues.noOfTimesAdPlayed.value}
                    ></Slider>
                  </span>
                  <span className="bg-gray-800 rounded-sm text-center py-1">
                    {calculatorValues.noOfTimesAdPlayed.value}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex h-48 md:h-auto w-full md:w-1/2 flex-col justify-start relative items-center border-l border-blue-600 p-4 border-dashed">
            <span className="text-xl md:text-2xl uppercase text-white rounded-md bg-gray-900 py-2 w-full text-center font-bold">
              {isStreamer ? "Your Earnings" : "Advertising Cost"}
            </span>
            <div className="flex pt-10 w-full justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
              <span className="px-8 w-full text-center font-bold text-xl md:text-3xl text-transparent text-green-500">
                {result ? (
                  <span className="whitespace-pre-wrap break-words">
                    Rs. {result.toLocaleString()}
                  </span>
                ) : (
                  <span className="text-lg text-blue-500">
                    Please set values
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorMain;
