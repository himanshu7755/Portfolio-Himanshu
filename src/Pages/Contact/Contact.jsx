import React from "react";

const Contact = ({ myStyle }) => {
    return (
        <div className="h-screen" style={myStyle}>
            <div className="lg:flex lg:justify-between lg:items-start">
                <div className="xl:w-2/5 lg:w-2/5 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none border-r-2 border-white">
                    <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                        <h1 className="xl:text-4xl text-3xl pb-4 font-bold">Contact Me</h1>
                        <p className="text-xl pb-8 leading-relaxed font-normal lg:pr-4">
                            Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to assist you.
                        </p>
                        <div className="flex pb-4 items-center">
                            <div>📞</div>
                            <p className="pl-4 text-base">+91 8219575822</p>
                        </div>
                        <div className="flex items-center">
                            <div>📧</div>
                            <p className="pl-4 text-base">hm.775570@gmail.com</p>
                        </div>
                        <p className="text-lg pt-10 tracking-wide">
                            Nalagarh, Solan<br />
                            Himachal Pradesh, Pin Code-174101
                        </p>
                    </div>
                </div>
                <div className="xl:w-3/5 lg:w-3/5 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                    <form id="contact" className="py-4 px-8 rounded-tr rounded-br">
                        <h1 className="text-4xl font-extrabold mb-6">Enter Details</h1>
                        <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                            <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label htmlFor="full_name" className="text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Full Name
                                    </label>
                                    <input required id="full_name" name="full_name" type="text" className="text-black focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Enter your name" />
                                </div>
                            </div>
                            <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Email
                                    </label>
                                    <input required id="email" name="email" type="email" className="text-black focus:outline-none focus:border-2 focus:border-red-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Enter your email" />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-wrap">
                            <div className="w-2/4 max-w-xs">
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Phone
                                    </label>
                                    <input required id="phone" name="phone" type="tel" className="text-black focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Enter your phone number" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea placeholder="Type your message" name="message" className="text-black border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700" rows={8} id="message" defaultValue={""} />
                            </div>
                            <button type="submit" className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
