export default function Pricing() {
  return (
    <>
      <div id="pricing" className="flex w-full justify-center gap-12 mt-10 align">
        <Plan name="Free" price={"0"} features={['50 reviews/month','Code history saving (last 15 days)']}/>
        <Plan name="Pro" price={"1500"} features={['100 reviews/month','Code history saving (last 1 months)','Team Collaboration']} />
        <Plan name="Elite" price={"2000"} features={['300 reviews/month','Code history saving (last 3 months)','Team Collaboration']} />
      </div>
    </>
  );
}

function Plan({ name, price, features }:{ name: string, price:string, features: string[]}) {
  return (
    <>
      <div className="p-1 sm:p-4 md:p-4 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
        <div className="flex flex-col gap-4 h-full justify-start">
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
            <div className="flex justify-between items-start ">
              <div className="flex gap-2 flex-col">
                <p className="font-medium text-xl text-black dark:text-white">
                  {name}
                </p>
              </div>
            </div>
            <div className="mt-8 ">
              <div className="flex items-end">
                <span className="text-lg font-bold text-neutral-500 dark:text-neutral-200">
                ₹
                </span>
                <div className="flex items-start gap-2">
                  <span className="text-3xl md:text-7xl font-bold dark:text-neutral-50 text-neutral-800">
                    {price}
                  </span>
                </div>
                <span className="text-base font-normal text-neutral-500 dark:text-neutral-200 mb-1 md:mb-2">
                  /month
                </span>
              </div>
            </div>
            <button className="w-full md:w-full mt-10 mb-4 px-2 py-2 rounded-lg bg-gradient-to-b from-sky-500 to-sky-600 text-white font-medium">
              Get {name}
            </button>
          </div>
          <div className="mt-1 p-4 text-base">
            <Feature features={features} />
            
            {/* <div className="flex items-start justify-start gap-2 my-4">
              <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-3 w-3 [stroke-width:4px] text-neutral-300"
                >
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
              </div>
              <div className="font-medium text-black dark:text-white">
                Up to 10,000 data points per month
              </div>
            </div> */}
            {/* <div className="flex items-start justify-start gap-2 my-4">
              <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-3 w-3 [stroke-width:4px] text-neutral-300"
                >
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
              </div>
              <div className="font-medium text-black dark:text-white">
                Email support
              </div>
            </div> */}
            {/* <div className="flex items-start justify-start gap-2 my-4">
              <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-3 w-3 [stroke-width:4px] text-neutral-300"
                >
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
              </div>
              <div className="font-medium text-black dark:text-white">
                Community forum access
              </div>
            </div> */}
            {/* <div className="flex items-start justify-start gap-2 my-4">
              <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-3 w-3 [stroke-width:4px] text-neutral-300"
                >
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
              </div>
              <div className="font-medium text-black dark:text-white">
                Cancel anytime
              </div>
            </div> */}
          </div>
          <div className="p-4"></div>
        </div>
      </div>
    </>
  );
}


const Feature = ({features}:{features:string[]}) => {
  return (
    <>
    {
     features &&  features.map((el,index)=> (
          <div key={index} className="flex items-start justify-start gap-2 my-4">
              <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-3 w-3 [stroke-width:4px] text-neutral-300"
                >
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
              </div>
              <div className="font-medium text-black dark:text-white">
                {el}
              </div>
            </div>
        )
      )
    }
    </>
  )  
}