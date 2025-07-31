import React, { useEffect } from "react";
import Chart from "./Chart";
import Hdfc from "../assets/images/HDFC.png";
import { Outlet } from "react-router-dom";
import img2 from "../assets/icons/2.svg";
import img3 from "../assets/icons/4.svg";

const Bulkpayout = () => {
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
      <main className="w-full   sm:h-[546px] flex flex-col overflow-y-scroll">
        <section className="w-full flex flex-col sm:flex-row mt-[50px] gap-[20px] px-[2px] sm:px-[20px]">
          {/* LEFT FORM SECTION */}
          <div className="flex w-full sm:w-[35%] bg-white rounded-xl border border-gray-400  ">
            <div className="w-full">
              <h2 className="text-center py-4 text-blue-400 border-b border-gray-400 font-bold text-2xl uppercase mb-10">
                Bulk Payout Transaction
              </h2>
              <div className="bg-white p-6 rounded-lg  md:w-full mx-auto">
                <form action="#">
                  <div className="mb-5">
                    <h2 className="text-[18px] text-gray-400">
                      Effortless Bulk Payouts for Businesses
                    </h2>
                  </div>
                  <div className="px-[50px] h-[300px]">
                    <div className="mb-5 border-dashed border-[5px] border-gray-400 h-full flex justify-center items-center">
                      <input className="hidden" id="drag" type="file" />
                      <label className="text-xl text-gray-400" htmlFor="drag">
                        Drag here for preview
                      </label>
                    </div>
                  </div>

                  <button className="block w-full bg-blue-500 text-white font-bold mt-[50px] p-4 rounded-lg">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* RIGHT TRANSACTION SECTION */}
          <div className="flex w-full sm:w-[65%] flex-col bg-white rounded-xl border-gray-400 border ">
            <div className="w-full">
              <h2 className="text-xl px-[20px] font-semibold text-gray-800 border-b border-gray-400 py-[20px]">
                Last 10 Transactions
              </h2>
            </div>

            {/* Transaction Table */}
            <div className="relative flex flex-col w-full h-full text-gray-700 bg-white rounded-xl bg-clip-border overflow-auto">
              {/* TABLE HEADERS */}
              <div className="  overflow-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-6 py-3">#Status</th>
                      <th className="px-6 py-3">Txn Date</th>
                      <th className="px-6 py-3">UTR</th>
                      <th className="px-6 py-3">Amount</th>
                      <th className="px-6 py-3">Create On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="px-6 py-4">
                          <button
                            className={`px-4 py-2 rounded font-medium text-white ${
                              tx.status === "Success"
                                ? "bg-green-400"
                                : tx.status === "Failed"
                                ? "bg-red-500"
                                : "bg-yellow-300"
                            }`}
                          >
                            {tx.status}
                          </button>
                        </td>
                        <td className="px-6 py-4">{tx.date}</td>
                        <td className="px-6 py-4">{tx.utr}</td>
                        <td className="px-6 py-4">{tx.amount}</td>
                        <td className="px-6 py-4">
                          {new Date(tx.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex items-center justify-between p-4 border-t">
                  <button className="border border-gray-900 py-2 px-4 text-xs font-bold uppercase rounded-lg">
                    Previous
                  </button>
                  <div className="flex gap-2">
                    {[1, 2, 3, "...", 8, 9, 10].map((num, i) => (
                      <button
                        key={i}
                        className="relative h-8 w-8 text-xs font-medium uppercase rounded-lg border border-gray-900 text-center"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          {num}
                        </span>
                      </button>
                    ))}
                  </div>
                  <button className="border border-gray-900 py-2 px-4 text-xs font-bold uppercase rounded-lg">
                    Next
                  </button>
                </div>
              </div>

              {/* PAGINATION */}
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
          {/* Box 1 */}
          <div className="bg-white p-6 rounded-lg border-2 border-gray-300 hover:border-blue-500 transition-all duration-300">
            <h1 className="text-2xl font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-2">
              Need Help?
            </h1>
            <p className="text-gray-600 mb-4">
              Visit our Help Center for detailed assistance on billing,
              payments, and subscriptions.
            </p>
            <img
              src={img2}
              alt="Help illustration"
              className="w-[200px] h-[200px] object-contain mx-auto mb-4"
            />
            <a
              href="#"
              className="inline-block text-blue-600 font-medium hover:underline"
            >
              Go to Help Center →
            </a>
          </div>

          {/* Box 2 */}
          <div className="bg-white p-6 rounded-lg border-2 border-gray-300 hover:border-blue-500 transition-all duration-300">
            <h1 className="text-2xl font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-2">
              Need Support?
            </h1>
            <p className="text-gray-600 mb-4">
              Our support team is available 24/7. Reach out for help with
              technical issues or questions.
            </p>
            <img
              src={img3}
              alt="Support illustration"
              className="w-[200px] h-[200px] object-contain mx-auto mb-4"
            />
            <a
              href="#"
              className="inline-block text-blue-600 font-medium hover:underline"
            >
              Contact Support →
            </a>
          </div>
        </section>

        <footer className="w-full min-h-[60px]  flex px-[20px] justify-between items-center">
          <h1 className=" text-gray-500 text-[14px]">2024© Busybox.</h1>
          <div
            style={{ fontFamily: "montserrat" }}
            className="flex min-w-[235px]  text-[14px] w-[235px] h-full items-center gap-[10px] text-gray-500 justify-between"
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

export default Bulkpayout;
