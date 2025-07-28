import React, { useEffect } from "react";
import Chart from "./Chart";
import Hdfc from "../assets/images/HDFC.png";

const Addmoney = () => {
  const getalldata = async () => {
    const res = await fetch(`https://api.busybox.in/payment/payment`);
    const data = await res.json();
    console.log(12, data);
  };

  useEffect(() => {
    getalldata();
  }, []);

  const transactions = [
    {
      status: "Success",
      date: "2025-07-24",
      utr: "UTR12345678",
      account: "Aman Reja - HDFC ****1234",
      amount: 5000,
    },
    {
      status: "Failed",
      date: "2025-07-23",
      utr: "UTR87654321",
      account: "Nisha Patel - SBI ****4321",
      amount: 2300,
    },
    {
      status: "Pending",
      date: "2025-07-22",
      utr: "UTR34984576",
      account: "Rahul Kumar - ICICI ****9876",
      amount: 1500,
    },
    {
      status: "Success",
      date: "2025-07-21",
      utr: "UTR45238765",
      account: "Priya Sharma - Axis ****1122",
      amount: 6200,
    },
    {
      status: "Success",
      date: "2025-07-20",
      utr: "UTR99887766",
      account: "Vikas Singh - Kotak ****3344",
      amount: 4800,
    },
    {
      status: "Failed",
      date: "2025-07-19",
      utr: "UTR56473829",
      account: "Sneha Roy - Yes Bank ****5566",
      amount: 1200,
    },
    {
      status: "Pending",
      date: "2025-07-18",
      utr: "UTR83726194",
      account: "Alok Mehta - BOI ****7788",
      amount: 3000,
    },
    {
      status: "Success",
      date: "2025-07-17",
      utr: "UTR26473829",
      account: "Meena Verma - Union ****9900",
      amount: 7000,
    },
    {
      status: "Success",
      date: "2025-07-16",
      utr: "UTR92736455",
      account: "Suresh Raina - PNB ****1111",
      amount: 5400,
    },
    {
      status: "Pending",
      date: "2025-07-15",
      utr: "UTR37482736",
      account: "Geeta Das - UCO ****2222",
      amount: 2500,
    },
  ];
  return (
    <div className=" w-[100%] rounded-2xl h-[600px] flex flex-col">
      <main className="w-full h-[546px] flex flex-col overflow-y-scroll">
        <section className="w-full flex gap-5 min-h-[500px] h-[500px] mt-5 px-5">
          <div className="w-full flex gap-5 bg-white p-5 rounded-xl ">
            <form className="w-1/3 flex flex-col gap-4 rounded-xl bg-white shadow p-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Add Money
              </h2>

              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-600">Amount</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter amount"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-600">Date</label>
                <input
                  type="date"
                  className="border text-gray-400 border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-600">UTR No</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter UTR number"
                />
              </div>

              <div className="flex justify-between text-sm text-gray-700">
                {["IMPS", "NEFT", "RTGS"].map((method) => (
                  <div key={method} className="flex items-center gap-2">
                    <input
                      id={method.toLowerCase()}
                      name="type"
                      type="radio"
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor={method.toLowerCase()}>{method}</label>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500">
                Note: Max ₹5 lakh per transaction, real-time credit, works 24x7.
              </p>

              <button
                type="submit"
                className="bg-blue-600 text-white rounded px-4 py-2 hover:shadow-lg transition"
              >
                Process
              </button>
            </form>

            <div className="w-2/5 flex flex-col gap-5">
              <div className="flex items-center justify-between bg-white shadow rounded-xl p-5 h-[120px]">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-credit-card text-blue-600 text-xl"></i>
                  <div>
                    <h1 className="text-lg font-semibold text-gray-800">
                      Payout Fund
                    </h1>
                    <p className="text-sm text-green-600">Active</p>
                  </div>
                </div>
                <h1 className="text-lg font-bold text-gray-800">
                  ₹ 8,60,518.33
                </h1>
              </div>

              <div className="flex items-center justify-between bg-white shadow rounded-xl p-5 h-[120px]">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-wallet text-blue-600 text-xl"></i>
                  <div>
                    <h1 className="text-lg font-semibold text-gray-800">
                      Card Balance
                    </h1>
                    <p className="text-sm text-green-600">Active</p>
                  </div>
                </div>
                <h1 className="text-lg font-bold text-gray-800">₹ 0.00</h1>
              </div>

              <div className="bg-white shadow rounded-xl p-5">
                <h1 className="text-lg font-semibold text-gray-800 mb-4">
                  Account Details
                </h1>
                <div className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm text-gray-700">
                  {/* Table Row */}
                  <div className="grid grid-cols-2 border-b border-gray-300 px-4 py-2">
                    <p className="font-medium text-gray-600">Account Name:</p>
                    <p className="text-right font-semibold text-gray-800">
                      Aakash
                    </p>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-300 px-4 py-2">
                    <p className="font-medium text-gray-600">A/C No:</p>
                    <p className="text-right font-semibold text-gray-800">
                      BB559900000036
                    </p>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-300 px-4 py-2">
                    <p className="font-medium text-gray-600">IFSC Code:</p>
                    <p className="text-right font-semibold text-gray-800">
                      HDFC0000060
                    </p>
                  </div>
                  <div className="grid grid-cols-2 px-4 py-2">
                    <p className="font-medium text-gray-600">Bank Name:</p>
                    <p className="text-right font-semibold text-gray-800">
                      HDFC Bank Ltd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full px-[20px] mt-[20px]">
          <div className="flex w-[100%] h-full flex-col bg-white rounded-xl shadow-md p-5 overflow-y-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Last 10 Transactions
            </h2>
            <div class="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
              <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
                <div class="flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center">
                  <div>
                    <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      Recent Transactions
                    </h5>
                    <p class="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                      These are details about the last transactions
                    </p>
                  </div>
                  <div class="flex w-full gap-2 shrink-0 md:w-max">
                    <div class="w-full md:w-72">
                      <div class="relative h-10 w-full min-w-[200px]">
                        <div class="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            ></path>
                          </svg>
                        </div>
                        <input
                          class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                        />
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Search
                        </label>
                      </div>
                    </div>
                    <button
                      class="flex select-none items-center gap-3 rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        ></path>
                      </svg>
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div class="p-6 px-0 overflow-scroll">
                <table class="w-full text-left table-auto min-w-max">
                  <thead>
                    <tr>
                      <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                          Transaction
                        </p>
                      </th>
                      <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                          Amount
                        </p>
                      </th>
                      <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                          Date
                        </p>
                      </th>
                      <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                          Status
                        </p>
                      </th>
                      <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                          Account
                        </p>
                      </th>
                      <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="p-4 border-b border-blue-gray-50">
                        <div class="flex items-center gap-3">
                          <img
                            src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg"
                            alt="Spotify"
                            class="relative inline-block h-12 w-12 !rounded-full border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                          />
                          <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                            Spotify
                          </p>
                        </div>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          $2,500
                        </p>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          Wed 3:00pm
                        </p>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <div class="w-max">
                          <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                            <span class="">paid</span>
                          </div>
                        </div>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <div class="flex items-center gap-3">
                          <div class="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                            <img
                              src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                              alt="visa"
                              class="relative inline-block h-full w-full !rounded-none  object-contain object-center p-1"
                            />
                          </div>
                          <div class="flex flex-col">
                            <p class="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                              visa 1234
                            </p>
                            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                              06/2026
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <button
                          class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              class="w-4 h-4"
                            >
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                            </svg>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-4 border-b border-blue-gray-50">
                        <div class="flex items-center gap-3">
                          <img
                            src="https://docs.material-tailwind.com/img/logos/logo-amazon.svg"
                            alt="Amazon"
                            class="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                          />
                          <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                            Amazon
                          </p>
                        </div>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          $5,000
                        </p>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          Wed 1:00pm
                        </p>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <div class="w-max">
                          <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                            <span class="">paid</span>
                          </div>
                        </div>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <div class="flex items-center gap-3">
                          <div class="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                            <img
                              src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                              alt="master-card"
                              class="relative inline-block h-full w-full !rounded-none  object-contain object-center p-1"
                            />
                          </div>
                          <div class="flex flex-col">
                            <p class="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                              master card 1234
                            </p>
                            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                              06/2026
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <button
                          class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              class="w-4 h-4"
                            >
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                            </svg>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-4 border-b border-blue-gray-50">
                        <div class="flex items-center gap-3">
                          <img
                            src="https://docs.material-tailwind.com/img/logos/logo-pinterest.svg"
                            alt="Pinterest"
                            class="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                          />
                          <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                            Pinterest
                          </p>
                        </div>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          $3,400
                        </p>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          Mon 7:40pm
                        </p>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <div class="w-max">
                          <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap bg-amber-500/20 text-amber-900">
                            <span class="">pending</span>
                          </div>
                        </div>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <div class="flex items-center gap-3">
                          <div class="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                            <img
                              src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                              alt="master-card"
                              class="relative inline-block h-full w-full !rounded-none object-contain object-center p-1"
                            />
                          </div>
                          <div class="flex flex-col">
                            <p class="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                              master card 1234
                            </p>
                            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                              06/2026
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <button
                          class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              class="w-4 h-4"
                            >
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                            </svg>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-4 border-b border-blue-gray-50">
                        <div class="flex items-center gap-3">
                          <img
                            src="https://docs.material-tailwind.com/img/logos/logo-google.svg"
                            alt="Google"
                            class="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                          />
                          <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                            Google
                          </p>
                        </div>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          $1,000
                        </p>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          Wed 5:00pm
                        </p>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <div class="w-max">
                          <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                            <span class="">paid</span>
                          </div>
                        </div>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <div class="flex items-center gap-3">
                          <div class="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                            <img
                              src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                              alt="visa"
                              class="relative inline-block h-full w-full !rounded-none  object-contain object-center p-1"
                            />
                          </div>
                          <div class="flex flex-col">
                            <p class="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                              visa 1234
                            </p>
                            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                              06/2026
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <button
                          class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              class="w-4 h-4"
                            >
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                            </svg>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-4">
                        <div class="flex items-center gap-3">
                          <img
                            src="https://docs.material-tailwind.com/img/logos/logo-netflix.svg"
                            alt="netflix"
                            class="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                          />
                          <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                            netflix
                          </p>
                        </div>
                      </td>
                      <td class="p-4">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          $14,000
                        </p>
                      </td>
                      <td class="p-4">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          Wed 3:30am
                        </p>
                      </td>
                      <td class="p-4">
                        <div class="w-max">
                          <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-red-900 uppercase rounded-md select-none whitespace-nowrap bg-red-500/20">
                            <span class="">cancelled</span>
                          </div>
                        </div>
                      </td>
                      <td class="p-4">
                        <div class="flex items-center gap-3">
                          <div class="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                            <img
                              src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                              alt="visa"
                              class="relative inline-block h-full w-full !rounded-none  object-contain object-center p-1"
                            />
                          </div>
                          <div class="flex flex-col">
                            <p class="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                              visa 1234
                            </p>
                            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                              06/2026
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="p-4">
                        <button
                          class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              class="w-4 h-4"
                            >
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                            </svg>
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="flex items-center justify-between p-4 border-t border-blue-gray-50">
                <button
                  class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Previous
                </button>
                <div class="flex items-center gap-2">
                  <button
                    class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      1
                    </span>
                  </button>
                  <button
                    class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      2
                    </span>
                  </button>
                  <button
                    class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      3
                    </span>
                  </button>
                  <button
                    class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      ...
                    </span>
                  </button>
                  <button
                    class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      8
                    </span>
                  </button>
                  <button
                    class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      9
                    </span>
                  </button>
                  <button
                    class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      10
                    </span>
                  </button>
                </div>
                <button
                  class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="w-full min-h-[60px] flex px-[20px] justify-between items-center">
          <h1 className="text-gray-500 text-[14px]">2024© Busybox.</h1>
          <div
            style={{ fontFamily: "montserrat" }}
            className="flex min-w-[235px] text-[14px] w-[235px] h-full items-center gap-[10px] text-gray-500 justify-between"
          >
            <a href="">Docs</a>
            <a href="">FAQ</a>
            <a href="">Support</a>
            <a href="">License</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Addmoney;
