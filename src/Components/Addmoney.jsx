import React, { useEffect } from "react";
import Chart from "./Chart";
import Hdfc from "../assets/images/HDFC.png";

const Addmoney = () => {
  const date = new Date();
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
          <div className="flex w-[100%] h-full flex-col bg-white rounded-xl p-5 overflow-y-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Last 10 Transactions
            </h2>
            <div class="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
                <div className="flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center">
                  {/* Left Text Content */}
                  <div>
                    <h5 className="text-xl font-semibold text-blue-gray-900">
                      Recent Transactions
                    </h5>
                    <p className="mt-1 text-base text-gray-700">
                      These are details about the last transactions
                    </p>
                  </div>

                  {/* Search + Download Button */}
                  <div className="flex w-full flex-col gap-2 md:flex-row md:items-center md:w-max">
                    {/* Search Box */}
                    <div className="w-full md:w-72 relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-10 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </div>

                    {/* Download Button */}
                    <button
                      type="button"
                      className="flex items-center gap-2 mt-2 md:mt-0 rounded-lg bg-gray-900 py-2 px-4 text-xs font-bold uppercase text-white transition hover:shadow-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                      Download
                    </button>
                  </div>
                </div>
              </div>

              <div class="relative overflow-x-auto  sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        #Status
                      </th>
                      <th scope="col" class="px-6 py-3">
                        <div class="flex items-center">
                          Txn Date
                          <a href="#">
                            <svg
                              class="w-3 h-3 ms-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </a>
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        <div class="flex items-center">
                          UTR
                          <a href="#">
                            <svg
                              class="w-3 h-3 ms-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </a>
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        <div class="flex items-center">
                          Amount
                          <a href="#">
                            <svg
                              class="w-3 h-3 ms-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </a>
                        </div>
                      </th>
                      <th scope="col" class="px-6 content-end py-3">
                        <div class="flex items-center">
                          Create On
                          <a href="#">
                            <svg
                              class="w-3 h-3 ms-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </a>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  {transactions.map((tx) => (
                    <tbody>
                      <tr className="border-b border-gray-200 ">
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {" "}
                          <div className="flex gap-1.5 items-center">
                            {tx.status === "Success" ? (
                              <button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  id="success"
                                >
                                  <path
                                    fill="#16A34A"
                                    d="M7 1C3.686 1 1 3.686 1 7v10c0 3.314 2.686 6 6 6h10c3.314 0 6-2.686 6-6V7c0-3.314-2.686-6-6-6H7z"
                                  />
                                  <path
                                    fill="#D1FAE5"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10 13.172l6.364-6.364 1.414 1.414L10 16 5.222 11.222l1.414-1.414L10 13.172z"
                                  />
                                </svg>
                              </button>
                            ) : tx.status === "Failed" ? (
                              <button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  id="failed"
                                >
                                  <path
                                    fill="#DC2626"
                                    d="M7 1C3.686 1 1 3.686 1 7v10c0 3.314 2.686 6 6 6h10c3.314 0 6-2.686 6-6V7c0-3.314-2.686-6-6-6H7z"
                                  />
                                  <path
                                    fill="#FECACA"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.536 8.464l-1.414-1.414L12 9.172 9.879 7.05 8.464 8.464 10.586 10.586 8.464 12.707l1.414 1.414L12 12l2.121 2.121 1.414-1.414L13.414 10.586l2.122-2.122z"
                                  />
                                </svg>
                              </button>
                            ) : (
                              <button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="yellow"
                                  viewBox="0 0 24 24"
                                  id="pending"
                                >
                                  <path
                                    fill="#ebae34"
                                    d="M7 1C3.68629 1 1 3.68629 1 7V17C1 20.3137 3.68629 23 7 23H17C20.3137 23 23 20.3137 23 17V7C23 3.68629 20.3137 1 17 1H7Z"
                                  />
                                  <path
                                    fill="#ffff"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11 12V5H13V11H19V13H12C11.4477 13 11 12.5523 11 12Z"
                                  />
                                </svg>
                              </button>
                            )}
                            <button
                              className={`px-[20px] text-white py-[5px] text-[10px] rounded-[10px] font-bold ${
                                tx.status === "Success"
                                  ? "bg-green-400"
                                  : tx.status === "Failed"
                                  ? "bg-red-500"
                                  : "bg-amber-300"
                              } text-gray-900 whitespace-nowrap`}
                            >
                              {tx.status}
                            </button>
                          </div>
                        </td>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {tx.date}
                        </td>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {tx.utr}
                        </td>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {tx.amount}
                        </td>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {date.toISOString()}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>

              <div class="flex items-center justify-between p-4">
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
