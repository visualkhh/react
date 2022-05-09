import {NextPage} from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

export default () => {
    return (
        <div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
                             alt="Man looking at item at a store"/>
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding
                            customers for your new business</a>
                        <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here
                            are five ideas you can use to find your first customers.</p>
                    </div>
                </div>
            </div>

            <div className="hidden md:block">
                <p>asdasd</p>
            </div>
            <div className="block md:hidden">
                // my content
            </div>
        </div>
    )
};

// export default User
