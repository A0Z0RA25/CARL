
function Contact(){


    return(
        <div className="border font-itim md:overflow-visible overflow-scroll flex flex-col bg-background px-5 py-[31.5px] md:h-[500px] h-[530px] md:my-14 border-black ">
            <h1 className="text-center text-2xl md:mb-8">Contact Me</h1>

            <form className="mx-auto border rounded-lg py-[10px] px-[10px] md:w-[600px] my-auto w-full border-black" action="">
                <div>
                    <label className="block" htmlFor="name">Name:</label>
                    <input className="block w-full border focus:bg-transparent focus:border-green-400 px-1 border-black bg-transparent border-t-0 border-x-0" placeholder="Enter your name" name="name" type="text" />
                </div>
                <div className="my-4">
                    <label className="block" htmlFor="email">Email:</label>
                    <input className="block w-full border border-black focus:bg-transparent bg-transparent px-1 border-t-0 border-x-0" placeholder="Enter your Email" name="email" type="text" />
                </div>
                <label htmlFor="message">message:</label>
                <textarea className="block w-full md:h-[100px] h-[150px] p-1 bg-transparent border border-black" placeholder="Enter your message" name="message" id=""></textarea>
                <button className="block bg-banner text-white md:text-10 text-sm rounded-md px-3 md:py-2 py-1 md:mx-auto md:w-1/2 my-2 mx-auto">Submit</button>
            </form>
        </div>
    )
}

export default Contact